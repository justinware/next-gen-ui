import { ShellState } from '../types';

export default {

  toggleSettings: (state: ShellState) => { state.settingsDrawerOpen = !state.settingsDrawerOpen },
};
