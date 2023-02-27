import { PayloadAction } from '@reduxjs/toolkit';

import { ShellState } from './types';
import { ColourVariant, Colour } from '../../../shared/types';


export default {

  toggleSettings: (state: ShellState) => {
    state.settingsDrawerOpen = !state.settingsDrawerOpen
  },

  setAppBarVariant: (state: ShellState, { payload }: PayloadAction<ColourVariant>) => {
    state.theme.appBarVariant = payload;
  },

  setPrimaryColour: (state: ShellState, { payload }: PayloadAction<Colour>) => {
    state.theme.palette.primary = payload;
  },

  setSecondaryColour: (state: ShellState, { payload }: PayloadAction<Colour>) => {
    state.theme.palette.secondary = payload;
  }
};
