import { configureStore } from '@reduxjs/toolkit';
import { getApiRef } from '@/shared/api';
import { redirect } from '../middlewares/redirect';
import { rootReducer } from './rootReducer';

const api = getApiRef();

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  }).concat(redirect)
});

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
