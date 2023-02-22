import { AppPalette, ColourVariant } from '../../../shared/types';

export type ThemeSettings = {
  appBarVariant: ColourVariant;
  palette: AppPalette;
}

export type ShellState = {
  settingsDrawerOpen: boolean;
  theme: ThemeSettings
};
