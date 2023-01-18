import { FunctionComponent as FC } from 'react';

import CoreLayout from './coreLayout';
import AppBar from './appBar';
import NavBar from './navBar';
import DrawerContainer from '../../../shared/components/drawerContainer';
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../store/hooks';
import { toggleSettings } from '../store';
import ViewSwitcher from './viewSwitcher';
import SettingsPanel from './settingsPanel';

const ShellRoot: FC = () => {

  const dispatch = useDispatch();
  const settingsOpen = useSelector(({ shell }) => shell.settingsDrawerOpen);

  return (
    <>
      <CoreLayout
        appBar={<AppBar />}
        contextBar={<NavBar />}
        content={<ViewSwitcher />}
      />
      <DrawerContainer
        title="Settings"
        isOpen={settingsOpen}
        onClose={() => { dispatch(toggleSettings()); }}
      >
        <SettingsPanel />
      </DrawerContainer>
    </>
  );
};

export default ShellRoot;
