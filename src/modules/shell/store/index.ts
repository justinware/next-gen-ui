import { createSlice } from '@reduxjs/toolkit';

import { ShellState } from './types';
import reducers from './reducers';
import { MODULE_KEY as name } from './constants';
import {
  BLUE, COLOUR_WEIGHT_700, PINK, LIGHT_COLOUR_VARIANT
} from '../../../shared/constants';

const initialState: ShellState = {

  settingsDrawerOpen: false,
  theme: {
    appBarColoured: false,
    palette: {
      primary: { palette: BLUE, weight: COLOUR_WEIGHT_700 },
      secondary: { palette: PINK, weight: COLOUR_WEIGHT_700 }
    },
    paletteMode: LIGHT_COLOUR_VARIANT
  }
};

const shellSlice = createSlice({ name, initialState, reducers });

export const {
  toggleSettings,
  setPrimaryColour,
  setSecondaryColour,
  togglePaletteMode,
  toggleAppBarColoured
} = shellSlice.actions;

export default shellSlice.reducer;
