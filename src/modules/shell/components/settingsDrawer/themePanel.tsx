import { FunctionComponent as FC , useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styles from './themePanel.module.css';
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../../store/hooks';
import { DARK_COLOUR_VARIANT, MAIN_COLOUR_VARIANT } from '../../../../shared/constants';
import { setAppBarVariant, setPrimaryColour, setSecondaryColour } from '../../store';
import { SlidingPanels, ThemePicker } from '../../../../shared/components';

const { themePanelRoot, itemRow, palettesSection } = styles;

interface ThemePanelProps {

  onBackClick: () => void;
}

const ThemePanel: FC<ThemePanelProps> = ({ onBackClick }) => {

  const dispatch = useDispatch();
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

  return (
    <div className={themePanelRoot}>
      <Toolbar>
        <IconButton onClick={onBackClick} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subtitle1">
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
          <ThemePicker
            selectedColour={primaryColour}
            onChange={newColour => { dispatch(setPrimaryColour(newColour)); }}
          />
          <ThemePicker
            selectedColour={secondaryColour}
            onChange={newColour => { dispatch(setSecondaryColour(newColour)); }}
          />
        </SlidingPanels>
      </div>
    </div>
  );
};

export default ThemePanel;
