import { AppPalette, ColourVariant, PaletteMode } from '../../../shared/types';

export type ThemeSettings = {
  appBarVariant: ColourVariant;
  palette: AppPalette;
  paletteMode: PaletteMode;
}

export type ShellState = {
  settingsDrawerOpen: boolean;
  theme: ThemeSettings
};
