import { FunctionComponent as FC, useState } from 'react';

import { DrawerContainer } from '../../../../shared/components';
import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch
} from '../../../../store/hooks';
import { toggleSettings } from '../../store';
import SettingsPanel from './settingsPanel';
import ThemePanel from './themePanel';
import { SlidingPanels } from '../../../../shared/components';

const SettingsDrawer: FC = () => {

  const dispatch = useDispatch();
  const settingsOpen = useSelector(({ shell }) => shell.settingsDrawerOpen);
  const [currentPanelIndex, setCurrentPanelIndex] = useState<number>(0);

  const toggleDrawerOpen = () => { dispatch(toggleSettings()); }

  const handleNavigateNextPanel = () => {

    setCurrentPanelIndex(1);
  };

  const handleNavigatePrevPanel = () => {

    setCurrentPanelIndex(0);
  };

  return (
    <DrawerContainer
      isOpen={settingsOpen}
      onClose={() => { dispatch(toggleSettings()); }}
    >
      <SlidingPanels current={currentPanelIndex}>
        <SettingsPanel
          onConfirm={toggleDrawerOpen}
          onCancel={toggleDrawerOpen}
          onThemeClick={handleNavigateNextPanel}
        />
        <ThemePanel onBackClick={handleNavigatePrevPanel} />
      </SlidingPanels>
    </DrawerContainer>
  );
};

export default SettingsDrawer;
