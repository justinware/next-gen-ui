import { FunctionComponent as FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

import styles from './themePanel.module.css';
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../../store/hooks';
import { DARK_COLOUR_VARIANT, MAIN_COLOUR_VARIANT } from '../../../../shared/constants';
import { setAppBarVariant } from '../../store';

const { themePanelRoot, itemRow } = styles;

interface ThemePanelProps {

  onBackClick: () => void;
}



// const ThemePanel: FC = () => {

//   const dispatch = useDispatch();
//   const currentPalette = useSelector(({ shell }) => shell.palette.primary);

//   return (
//     <div className={settingsPanelRoot}>
//       <div className={itemRow}>
//         <Typography variant="body1" style={{ alignSelf: 'flex-start' }}>
//           Theme
//         </Typography>
//         <ThemePicker
//           selectedPalette={currentPalette}
//           onChange={(newPalette) => { dispatch(setPalette({ primary: newPalette })); } }
//         />
//       </div>
//     </div>
//   );
// };

const ThemePanel: FC<ThemePanelProps> = ({ onBackClick }) => {

  const dispatch = useDispatch();
  const appBarDarkChecked = useSelector(({ shell }) => shell.theme.appBarVariant === DARK_COLOUR_VARIANT);

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
    </div>
  );
};

export default ThemePanel;
