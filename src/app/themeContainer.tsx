import { FunctionComponent as FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ParentComponent } from '../shared/types';
import { useAppSelector as useSelector } from '../store/hooks';
import { PALETTE_MAP } from '../shared/constants/theme';

const ThemeContainer: FC<ParentComponent> = ({ children }) => {

  const palette = useSelector(({ shell }) => shell.palette);

  const theme = createTheme({

    palette: {

      primary: PALETTE_MAP.get(palette.primary),
      secondary: palette.secondary ? PALETTE_MAP.get(palette.secondary) : undefined
    }
  });

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
};

export default ThemeContainer;
