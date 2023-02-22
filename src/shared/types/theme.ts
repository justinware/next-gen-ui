import {
  RED, PINK, PURPLE, DEEP_PURPLE, INDIGO, BLUE, LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME,
  YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY, BLUE_GREY, COLOUR_WEIGHT_50, COLOUR_WEIGHT_100,
  COLOUR_WEIGHT_200, COLOUR_WEIGHT_300, COLOUR_WEIGHT_400, COLOUR_WEIGHT_500, COLOUR_WEIGHT_600,
  COLOUR_WEIGHT_700, COLOUR_WEIGHT_800, COLOUR_WEIGHT_900, MAIN_COLOUR_VARIANT, DARK_COLOUR_VARIANT,
  LIGHT_COLOUR_VARIANT
} from '../constants/theme';

export type MuiColourPalette = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export type ColourPalette =
  typeof RED |
  typeof PINK |
  typeof PURPLE |
  typeof DEEP_PURPLE |
  typeof INDIGO |
  typeof BLUE |
  typeof LIGHT_BLUE |
  typeof CYAN |
  typeof TEAL |
  typeof GREEN |
  typeof LIGHT_GREEN |
  typeof LIME |
  typeof YELLOW |
  typeof AMBER |
  typeof ORANGE |
  typeof DEEP_ORANGE |
  typeof BROWN |
  typeof GREY |
  typeof BLUE_GREY;

export type ColourWeight =
  typeof COLOUR_WEIGHT_50 |
  typeof COLOUR_WEIGHT_100 |
  typeof COLOUR_WEIGHT_200 |
  typeof COLOUR_WEIGHT_300 |
  typeof COLOUR_WEIGHT_400 |
  typeof COLOUR_WEIGHT_500 |
  typeof COLOUR_WEIGHT_600 |
  typeof COLOUR_WEIGHT_700 |
  typeof COLOUR_WEIGHT_800 |
  typeof COLOUR_WEIGHT_900;

export type ColourVariant =
  typeof DARK_COLOUR_VARIANT |
  typeof MAIN_COLOUR_VARIANT |
  typeof LIGHT_COLOUR_VARIANT;

export type Colour = {
  palette: ColourPalette;
  weight: ColourWeight;
}

export type AppPalette = {
  primary: Colour;
  secondary: Colour;
}
