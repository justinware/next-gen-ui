import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import shell from '../modules/shell/store';

export const store = configureStore({

  reducer: { shell },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
