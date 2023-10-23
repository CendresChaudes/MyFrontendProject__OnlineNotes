import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@/shared/api';
import { rootReducer } from './rootReducer';

const api = createApi();

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});
