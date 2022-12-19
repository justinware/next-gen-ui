import { FunctionComponent as FC } from 'react';
import Drawer from '@mui/material/Drawer';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import { ParentComponent, ModalComponent } from '../types/components';
import styles from './drawerContainer.module.css';

interface DrawerContainerProps extends ParentComponent, ModalComponent {

  title: string;
}

const { drawerContainerRoot } = styles;

const DrawerContainer: FC<DrawerContainerProps> = ({ children, isOpen, onClose, title }) => {

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <div className={drawerContainerRoot}>
        <DialogTitle sx={{ m: 0, p: 2,  color: theme => theme.palette.text.secondary }}>
          { title }
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          { children }
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={onClose}
          >
            OK
          </Button>
        </DialogActions>
      </div>
    </Drawer>
  );
};

export default DrawerContainer;
