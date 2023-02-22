import { FunctionComponent as FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ParentComponentProps, MuiColourPalette } from '../shared/types';
import { useAppSelector as useSelector } from '../store/hooks';
import { PALETTE_MAP } from '../shared/constants';

const ThemeContainer: FC<ParentComponentProps> = ({ children }) => {

  const { primary, secondary } = useSelector(({ shell }) => shell.theme.palette);
  const theme = createTheme({
    palette: {
      primary: {
        main: (PALETTE_MAP.get(primary.palette) as MuiColourPalette)[primary.weight]
      },
     secondary: {
        main: (PALETTE_MAP.get(secondary.palette) as MuiColourPalette)[secondary.weight]
     }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
};

export default ThemeContainer;
