import { Provider as ReduxStoreProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import './fonts';

import ThemeContainer from './themeContainer';
import ShellRoot from '../modules/shell/components/shellRoot';

import { store } from '../store';

const App = () => (
  <ReduxStoreProvider store={store}>
    <ThemeContainer>
      <CssBaseline />
      <ShellRoot />
    </ThemeContainer>
  </ReduxStoreProvider>
);

export default App;
