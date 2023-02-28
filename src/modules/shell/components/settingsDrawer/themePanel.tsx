import { FunctionComponent as FC , useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import rgb2hex from 'rgb2hex';

import styles from './themePanel.module.css';
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../../store/hooks';
import { DARK_COLOUR_VARIANT, MAIN_COLOUR_VARIANT } from '../../../../shared/constants';
import { setAppBarVariant, setPrimaryColour, setSecondaryColour } from '../../store';
import { SlidingPanels, ThemePicker } from '../../../../shared/components';

const { themePanelRoot, itemRow, palettesSection, palettePanel, coloursPreviewRow } = styles;

interface ThemePanelProps {

  onBackClick: () => void;
}

const ThemePanel: FC<ThemePanelProps> = ({ onBackClick }) => {

  const dispatch = useDispatch();
  const theme = useTheme();
  const appBarDarkChecked = useSelector(({ shell }) => shell.theme.appBarVariant === DARK_COLOUR_VARIANT);
  const primaryColour = useSelector(({ shell }) => shell.theme.palette.primary);
  const secondaryColour = useSelector(({ shell }) => shell.theme.palette.secondary);
  const [selectedPalette, setSelectedPalette] = useState<number>(0);

  const handleAppBarDarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.checked) {
      dispatch(setAppBarVariant(DARK_COLOUR_VARIANT));
    } else {
      dispatch(setAppBarVariant(MAIN_COLOUR_VARIANT));
    }
  };

  const getColourTile = (backgroundColor: string) => (

    <div style={{ backgroundColor, color: theme.palette.getContrastText(backgroundColor) }}>
      <Typography variant="caption">{backgroundColor}</Typography>
    </div>
  );

  return (
    <div className={themePanelRoot}>
      <Toolbar>
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary'}}>
          Theme
        </Typography>
        <span>&nbsp;</span>
      </Toolbar>
      <div className={itemRow}>
        <Typography variant="body1">
          App Bar Dark
        </Typography>
        <Switch
          color="secondary"
          checked={appBarDarkChecked}
          onChange={handleAppBarDarkChange}
        />
      </div>
      <div className={palettesSection}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs
            value={selectedPalette}
            onChange={(_, newSelected) => { setSelectedPalette(newSelected);  }}
            variant="fullWidth"
          >
            <Tab label="Primary" />
            <Tab label="Secondary" />
          </Tabs>
        </Box>
        <SlidingPanels current={selectedPalette}>
          <div className={palettePanel}>
            <div className={coloursPreviewRow}>
              {getColourTile(rgb2hex(theme.palette.primary.dark).hex)}
              {getColourTile(theme.palette.primary.main)}
              {getColourTile(rgb2hex(theme.palette.primary.light).hex)}
            </div>
            <ThemePicker
              selectedColour={primaryColour}
              onChange={newColour => { dispatch(setPrimaryColour(newColour)); }}
            />
          </div>
          <div className={palettePanel}>
            <div className={coloursPreviewRow}>
              {getColourTile(rgb2hex(theme.palette.secondary.dark).hex)}
              {getColourTile(theme.palette.secondary.main)}
              {getColourTile(rgb2hex(theme.palette.secondary.light).hex)}
            </div>
            <ThemePicker
              selectedColour={secondaryColour}
              onChange={newColour => { dispatch(setSecondaryColour(newColour)); }}
            />
          </div>
        </SlidingPanels>
      </div>
    </div>
  );
};

export default ThemePanel;
