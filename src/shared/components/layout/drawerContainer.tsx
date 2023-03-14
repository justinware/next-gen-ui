import Drawer from '@mui/material/Drawer';

import { ParentComponentProps, ModalComponentProps } from '../../types/components';
import styles from './drawerContainer.module.css';

interface DrawerContainerProps extends ParentComponentProps, ModalComponentProps {}

const { drawerContainerRoot } = styles;

const DrawerContainer = ({ children, isOpen, onClose } : DrawerContainerProps) => (
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={onClose}
  >
    <div className={drawerContainerRoot}>
      { children }
    </div>
  </Drawer>
);

export default DrawerContainer;
