import { FunctionComponent as FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import styles from './themePanel.module.css';

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

  const { themePanelRoot } = styles;

  return (
    <div className={themePanelRoot}>
      <Toolbar>
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="body1">
          Theme
        </Typography>
        <span>&nbsp;</span>
      </Toolbar>
    </div>
  );
};

export default ThemePanel;
