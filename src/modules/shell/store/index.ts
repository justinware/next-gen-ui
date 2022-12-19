import { createSlice } from '@reduxjs/toolkit';

import { ShellState, Views, Sites } from '../types';
import reducers from './reducers';

const initialState: ShellState = {

  layout: {
    settingsDrawerOpen: false
  },
  view: Views.Site,
  site: Sites.Site1
};

const shellSlice = createSlice({

  name: 'shell',
  initialState,
  reducers
});

export const { toggleSettings } = shellSlice.actions;

export default shellSlice.reducer;
