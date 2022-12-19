import { FunctionComponent as FC } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import './fonts';

import ShellRoot from '../modules/shell/components/shellRoot';

import { store } from '../store';

const App: FC = () => {

  return (
    <Provider store={store}>
      <CssBaseline />
      <ShellRoot />
    </Provider>
  );
};

export default App;
