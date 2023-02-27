import { FunctionComponent as FC } from 'react';
import { useTheme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

import { PALETTE_MAP } from '../../constants/maps';
import { Colour, ColourPalette, MuiColourPalette, ColourWeight } from '../../types';
import styles from './themePicker.module.css';
import { KeyValuePair } from '../../types';

const { themePicker, paletteRow } = styles;

interface ThemePickerProps {

  selectedColour: Colour;
  onChange: (newColour: Colour) => void;
}

type PalettePair = KeyValuePair<ColourPalette, MuiColourPalette>;

const ThemePicker: FC<ThemePickerProps> = ({ selectedColour, onChange }) => {

  const theme = useTheme();
  const palettes = [...PALETTE_MAP.keys()]
                     .map(key => ({ key, value: (PALETTE_MAP.get(key) as MuiColourPalette) } as PalettePair));

  const handleColourClick = (palette: ColourPalette, weight: ColourWeight) => {

    onChange({ palette, weight });
  }

  const getPaletteRow = (palette: PalettePair) => {

    const weights =
      Object.keys(palette.value)
            .filter(w => !w.startsWith('A'))
            .reverse()
            .map(k => {
              const key = k as unknown as ColourWeight;
              return { key, value: palette.value[key] };
            });

    return (
      <div className={paletteRow} key={`${palette.key}-palette-row`}>
        { weights.map(wp => {

          const isSelected = selectedColour.palette === palette.key && Number(selectedColour.weight) === Number(wp.key);
          const backgroundColor = wp.value;
          const color = theme.palette.getContrastText(backgroundColor);

          return (
            <button
              key={`${palette.key}-${wp.key}-button`}
              style={{
                backgroundColor,
                border: isSelected ? `${color} solid 2px` : undefined
              }}
              onClick={() => { handleColourClick(palette.key, wp.key as ColourWeight) }}
            >
              { isSelected && <CheckIcon style={{ color }} /> }
            </button>
          )})
        }
      </div>
    )
  }

  return (
    <div className={themePicker}>
      { palettes.map(p => getPaletteRow(p)) }
    </div>
  );
};

export default ThemePicker;
