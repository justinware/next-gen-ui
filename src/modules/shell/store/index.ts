import { createSlice } from '@reduxjs/toolkit';
import { blue, pink } from '@mui/material/colors';

import { ShellState } from '../types';
import reducers from './reducers';
import { MODULE_KEY as name } from './constants';

const initialState: ShellState = {

  settingsDrawerOpen: false,
  palette: {

    primary: blue,
    secondary: pink
  }
};

const shellSlice = createSlice({ name, initialState, reducers });

export const { toggleSettings } = shellSlice.actions;

export default shellSlice.reducer;
