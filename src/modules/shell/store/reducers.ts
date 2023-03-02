import { PayloadAction } from '@reduxjs/toolkit';

import { ShellState } from './types';
import { Colour } from '../../../shared/types';
import {
  DARK_COLOUR_VARIANT,
  LIGHT_COLOUR_VARIANT,
  COLOUR_WEIGHT_500,
  COLOUR_WEIGHT_200
} from '../../../shared/constants';

export default {

  toggleSettings: (state: ShellState) => {

    state.settingsDrawerOpen = !state.settingsDrawerOpen
  },

  setPrimaryColour: ({ theme }: ShellState, { payload }: PayloadAction<Colour>) => {

    theme.palette.primary = payload;
  },

  setSecondaryColour: ({ theme }: ShellState, { payload }: PayloadAction<Colour>) => {

    theme.palette.secondary = payload;
  },

  togglePaletteMode: ({ theme }: ShellState) => {

    const targetMode = theme.paletteMode === LIGHT_COLOUR_VARIANT ? DARK_COLOUR_VARIANT : LIGHT_COLOUR_VARIANT;

    if (targetMode === DARK_COLOUR_VARIANT) {
      theme.palette.primary.weight = COLOUR_WEIGHT_200;
      theme.palette.secondary.weight = COLOUR_WEIGHT_200;
    } else {
      theme.palette.primary.weight = COLOUR_WEIGHT_500;
      theme.palette.secondary.weight = COLOUR_WEIGHT_500;
    }

    theme.paletteMode = targetMode;
  },

  toggleAppBarColoured: ({ theme }: ShellState) => {

    theme.appBarColoured = !theme.appBarColoured
  },
};
