import { FunctionComponent as FC } from 'react';
import Typography from '@mui/material/Typography';

import packageData from '../../../../package.json';
import styles from './settingsPanel.module.css';
import ThemePicker from '../../../shared/components/themePicker';
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from '../../../store/hooks';
import { setPalette } from '../store';

const { settingsPanelRoot, itemRow } = styles;
const { version } = packageData;

const SettingsPanel: FC = () => {

  const dispatch = useDispatch();
  const currentPalette = useSelector(({ shell }) => shell.palette.primary);

  return (
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
        <Typography variant="body1" style={{ alignSelf: 'flex-start' }}>
          Theme
        </Typography>
        <ThemePicker
          selectedPalette={currentPalette}
          onChange={(newPalette) => { dispatch(setPalette({ primary: newPalette })); } }
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
