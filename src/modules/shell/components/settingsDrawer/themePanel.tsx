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
import { DARK_COLOUR_VARIANT } from '../../../../shared/constants';
import { setPrimaryColour, setSecondaryColour, togglePaletteMode, toggleAppBarColoured } from '../../store';
import { SlidingPanels, ThemePicker, ContrastBox } from '../../../../shared/components';

const { themePanelRoot, itemRow, palettesSection, palettePanel, coloursPreviewRow } = styles;

interface ThemePanelProps {

  onBackClick: () => void;
}

const ThemePanel: FC<ThemePanelProps> = ({ onBackClick }) => {

  const dispatch = useDispatch();
  const theme = useTheme();
  const darkMode = useSelector(({ shell }) => shell.theme.paletteMode === DARK_COLOUR_VARIANT);
  const appBarColoured = useSelector(({ shell }) => shell.theme.appBarColoured);
  const primaryColour = useSelector(({ shell }) => shell.theme.palette.primary);
  const secondaryColour = useSelector(({ shell }) => shell.theme.palette.secondary);
  const [selectedPalette, setSelectedPalette] = useState<number>(0);

  const getColourTile = (backgroundColor: string) => (

    <ContrastBox backgroundColor={backgroundColor}>
      <Typography variant="caption">{backgroundColor}</Typography>
    </ContrastBox>
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
          Dark Mode
        </Typography>
        <Switch
          color="secondary"
          checked={darkMode}
          onChange={() => { dispatch(togglePaletteMode()); }}
        />
      </div>
      <div className={itemRow}>
        <Typography variant="body1" sx={{ color: darkMode ? theme.palette.text.disabled : 'inherit' }}>
          App Bar Coloured
        </Typography>
        <Switch
          color="secondary"
          checked={appBarColoured}
          disabled={darkMode}
          onChange={() => { dispatch(toggleAppBarColoured()); }}
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
