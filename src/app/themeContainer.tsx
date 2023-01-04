import { FunctionComponent as FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ParentComponent } from '../shared/types';
import { useAppSelector as useSelector } from '../store/hooks';

const ThemeContainer: FC<ParentComponent> = ({ children }) => {

  const palette = useSelector(({ shell }) => shell.palette);

  const theme = createTheme({

    palette: { ...palette }
  });

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
};

export default ThemeContainer;
