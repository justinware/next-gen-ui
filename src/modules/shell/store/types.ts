import { AppPalette, ColourVariant, PaletteMode } from '../../../shared/types';

export type ThemeSettings = {
  appBarColoured: boolean;
  palette: AppPalette;
  paletteMode: PaletteMode;
}

export type ShellState = {
  settingsDrawerOpen: boolean;
  theme: ThemeSettings
};
