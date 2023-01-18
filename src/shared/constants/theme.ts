import {
  red, pink, purple, deepPurple, indigo, blue,
  lightBlue, cyan, teal, green, lightGreen, lime,
  yellow, amber, orange, deepOrange, brown, grey,
  blueGrey
} from '@mui/material/colors';
import { PaletteColorOptions } from '@mui/material';

import { ColourPalette } from '../types';

export const RED = 'red';
export const PINK = 'pink';
export const PURPLE = 'purple';
export const DEEP_PURPLE = 'deep-purple';
export const INDIGO = 'indigo';
export const BLUE = 'blue';
export const LIGHT_BLUE = 'light-blue';
export const CYAN = 'cyan';
export const TEAL = 'teal';
export const GREEN = 'green';
export const LIGHT_GREEN = 'light-green';
export const LIME = 'lime';
export const YELLOW = 'yellow';
export const AMBER = 'amber';
export const ORANGE = 'orange';
export const DEEP_ORANGE = 'deep-orange';
export const BROWN = 'brown';
export const GREY = 'grey';
export const BLUE_GREY = 'blue-grey';

export const PALETTE_MAP = new Map<ColourPalette, PaletteColorOptions>([
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
