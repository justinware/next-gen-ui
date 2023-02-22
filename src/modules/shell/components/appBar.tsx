import { FunctionComponent as FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../store/hooks';
import { toggleSettings } from '../store';
import styles from './appBar.module.css';

const { appBarRoot } = styles;

const AppBarContainer: FC = () => {

  const dispatch = useDispatch();
  const colourVariant = useSelector(({ shell }) => shell.theme.appBarVariant);

  return (
    <AppBar
      position="static"
      className={appBarRoot}
      sx={{ backgroundColor: `primary.${colourVariant}`, color: ({ palette }) => palette.getContrastText(palette.primary[colourVariant]) }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Peak Next
        </Typography>
        <IconButton onClick={() => { dispatch(toggleSettings()); }} sx={{ color: 'inherit' }}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarContainer;
