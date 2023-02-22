import {
  red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime,
  yellow, amber, orange, deepOrange, brown, grey, blueGrey
} from '@mui/material/colors';

import {
  RED, PINK, PURPLE, DEEP_PURPLE, INDIGO, BLUE, LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME,
  YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY, BLUE_GREY
} from './theme';

import { ColourPalette, MuiColourPalette } from '../types';

export const PALETTE_MAP = new Map<ColourPalette, MuiColourPalette>([
  [RED, red],
  [PINK, pink],
  [PURPLE, purple],
  [DEEP_PURPLE, deepPurple],
  [INDIGO, indigo],
  [BLUE, blue],
  [LIGHT_BLUE, lightBlue],
  [CYAN, cyan],
  [TEAL, teal],
  [GREEN, green],
  [LIGHT_GREEN, lightGreen],
  [LIME, lime],
  [YELLOW, yellow],
  [AMBER, amber],
  [ORANGE, orange],
  [DEEP_ORANGE, deepOrange],
  [BROWN, brown],
  [GREY, grey],
  [BLUE_GREY, blueGrey]
]);
