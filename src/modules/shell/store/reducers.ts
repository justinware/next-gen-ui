import { PayloadAction } from '@reduxjs/toolkit';

import { ShellState } from '../types';
import { AppPalette } from '../../../shared/types';

export default {

  toggleSettings: (state: ShellState) => { state.settingsDrawerOpen = !state.settingsDrawerOpen },
  setPalette: (state: ShellState, action: PayloadAction<AppPalette>) => { state.palette = action.payload }
};
