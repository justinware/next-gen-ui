import { createSlice } from '@reduxjs/toolkit';

import { ShellState } from '../types';
import reducers from './reducers';
import { MODULE_KEY as name } from './constants';

const initialState: ShellState = {

  settingsDrawerOpen: false,
  palette: {

    primary: 'indigo',
    secondary: 'pink'
  }
};

const shellSlice = createSlice({ name, initialState, reducers });

export const {
  toggleSettings,
  setPalette
} = shellSlice.actions;

export default shellSlice.reducer;
