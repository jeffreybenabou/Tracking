import {configureStore} from '@reduxjs/toolkit';
import ReduxState from './ReduxState.tsx';
import Middleware from './Middleware.tsx';

export const store = configureStore({
  reducer: ReduxState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(Middleware),
});
