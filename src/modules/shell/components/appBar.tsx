import { FunctionComponent as FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../store/hooks';
import { toggleSettings } from '../store';
import styles from './appBar.module.css';
import { ContrastBox } from '../../../shared/components';
import NavBar from './navBar';
import { LIGHT_COLOUR_VARIANT } from '../../../shared/constants';

const { appBarRoot } = styles;

const AppBarContainer: FC = () => {

  const dispatch = useDispatch();
  const { palette } = useTheme();
  const appBarColoured = useSelector(({ shell }) => shell.theme.appBarColoured);
  const backgroundColor =  palette.mode === LIGHT_COLOUR_VARIANT ?
    (appBarColoured ? palette.primary.main : palette.background.paper) : undefined

  return (
    <AppBar
      className={appBarRoot}
    >
      <ContrastBox backgroundColor={backgroundColor}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="inherit">
            Peak Next
          </Typography>
          <IconButton onClick={() => { dispatch(toggleSettings()); }} color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
        <NavBar />
      </ContrastBox>
    </AppBar>
  );
};

export default AppBarContainer;
