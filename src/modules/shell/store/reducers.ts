import { PayloadAction } from '@reduxjs/toolkit';

import { ShellState } from './types';
import { AppPalette, ColourVariant } from '../../../shared/types';


export default {

  toggleSettings: (state: ShellState) => {
    state.settingsDrawerOpen = !state.settingsDrawerOpen
  },

  setAppBarVariant: (state: ShellState, { payload }: PayloadAction<ColourVariant>) => {
    state.theme.appBarVariant = payload;
  },
  // setPalette: (state: ShellState, action: PayloadAction<AppPalette>) => { state.palette = action.payload }
};
