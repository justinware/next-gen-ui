import { ShellState } from '../types';

export default {

  toggleSettings: (state: ShellState) => { state.layout.settingsDrawerOpen = !state.layout.settingsDrawerOpen },
};
