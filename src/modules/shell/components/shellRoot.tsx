import CoreLayout from './coreLayout';
import AppBar from './appBar';
import ViewSwitcher from './viewSwitcher';
import SettingsDrawer from './settingsDrawer';

const ShellRoot = () => (
  <>
    <CoreLayout
      appBar={<AppBar />}
      content={<ViewSwitcher />}
    />
    <SettingsDrawer />
  </>
);

export default ShellRoot;
