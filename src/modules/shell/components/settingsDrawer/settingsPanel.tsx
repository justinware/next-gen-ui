import { FunctionComponent as FC } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import packageData from '../../../../../package.json';
import styles from './settingsPanel.module.css';
import { DrawerLayout } from '../../../../shared/components';
import { DialogComponentProps } from '../../../../shared/types';

interface SettingsPanelProps extends DialogComponentProps {

  onThemeClick: () => void;
}

// import { ThemePicker } from '../../../shared/components';
// import {
//   useAppDispatch as useDispatch,
//   useAppSelector as useSelector,
// } from '../../../store/hooks';
// import { setPalette } from '../store';

const { settingsPanelRoot, itemRow } = styles;
const { version } = packageData;

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

const SettingsPanel: FC<SettingsPanelProps> = ({ onConfirm, onCancel, onThemeClick }) => {

  return (
    <DrawerLayout
      title='Settings'
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      <div className={settingsPanelRoot}>
        <div className={itemRow}>
          <Typography variant="body1">
            Version
          </Typography>
          <Typography variant="body1">
            {`v${version}`}
          </Typography>
        </div>
        <div className={itemRow}>
          <Button
            color="primary"
            endIcon={<ChevronRightIcon />}
            onClick={onThemeClick}
          >
            Theme
          </Button>
        </div>
        {/* <div className={itemRow}>
          <Typography variant="body1" style={{ alignSelf: 'flex-start' }}>
            Theme
          </Typography>
          <ThemePicker
            selectedPalette={currentPalette}
            onChange={(newPalette) => { dispatch(setPalette({ primary: newPalette })); } }
          />
        </div> */}
      </div>
    </DrawerLayout>
  );
};

export default SettingsPanel;
