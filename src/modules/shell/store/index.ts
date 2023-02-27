import { createSlice } from '@reduxjs/toolkit';

import { ShellState } from './types';
import reducers from './reducers';
import { MODULE_KEY as name } from './constants';
import { BLUE, COLOUR_WEIGHT_700, PINK, DARK_COLOUR_VARIANT } from '../../../shared/constants';

const initialState: ShellState = {

  settingsDrawerOpen: false,
  theme: {
    appBarVariant: DARK_COLOUR_VARIANT,
    palette: {
      primary: { palette: BLUE, weight: COLOUR_WEIGHT_700 },
      secondary: { palette: PINK, weight: COLOUR_WEIGHT_700 },
    }
  }
};

const shellSlice = createSlice({ name, initialState, reducers });

export const {
  toggleSettings,
  setAppBarVariant,
  setPrimaryColour,
  setSecondaryColour
} = shellSlice.actions;

export default shellSlice.reducer;
