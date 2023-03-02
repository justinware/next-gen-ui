import { FunctionComponent as FC } from 'react';

import CoreLayout from './coreLayout';
import AppBar from './appBar';
import NavBar from './navBar';
import ViewSwitcher from './viewSwitcher';
import SettingsDrawer from './settingsDrawer';

const ShellRoot: FC = () => {

  return (
    <>
      <CoreLayout
        appBar={<AppBar />}
        content={<ViewSwitcher />}
      />
      <SettingsDrawer />
    </>
  );
};

export default ShellRoot;
