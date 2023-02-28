import { FunctionComponent as FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import { ParentComponentProps, DialogComponentProps } from '../../types/components';
import styles from './drawerLayout.module.css';

interface DrawerLayoutProps extends DialogComponentProps, ParentComponentProps {

  title: string;
}

const { drawerLayoutRoot } = styles;

const DrawerLayout: FC<DrawerLayoutProps> = ({

  confirmText = 'OK',
  onConfirm,
  onCancel,
  children,
  title
}) => {

  return (
    <div className={drawerLayoutRoot}>
      <Toolbar>
        <Typography variant="h6" sx={{ color: 'text.secondary'}}>
          { title }
        </Typography>
        <IconButton onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <DialogContent>
        { children }
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={onConfirm}
          variant="contained"
        >
          { confirmText }
        </Button>
      </DialogActions>
    </div>
  );
};

export default DrawerLayout;
