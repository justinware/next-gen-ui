import {
  RED, PINK, PURPLE, DEEP_PURPLE, INDIGO, BLUE,
  LIGHT_BLUE, CYAN, TEAL, GREEN, LIGHT_GREEN, LIME,
  YELLOW, AMBER, ORANGE, DEEP_ORANGE, BROWN, GREY,
  BLUE_GREY
} from '../constants/theme';

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

export interface AppPalette {

  primary: ColourPalette;
  secondary?: ColourPalette;
}
