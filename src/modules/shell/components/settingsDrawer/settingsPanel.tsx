import { FunctionComponent as FC } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PaletteIcon from '@mui/icons-material/Palette';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import packageData from '../../../../../package.json';
import styles from './settingsPanel.module.css';
import { DrawerLayout } from '../../../../shared/components';
import { DialogComponentProps } from '../../../../shared/types';

interface SettingsPanelProps extends DialogComponentProps {

  onThemeClick: () => void;
}

const { settingsPanelRoot, itemRow, menuSection } = styles;
const { version } = packageData;

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
        <Divider />
        <div className={menuSection}>
          <MenuList>
            <MenuItem onClick={onThemeClick}>
              <ListItemIcon>
                <PaletteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Theme</ListItemText>
              <ArrowForwardIcon color="action" />
            </MenuItem>
          </MenuList>
        </div>
      </div>
    </DrawerLayout>
  );
};

export default SettingsPanel;
