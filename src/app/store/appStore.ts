import { configureStore } from '@reduxjs/toolkit';
import { getApiRef, getAuthRef } from '@/shared/api';
import { redirect } from '../middlewares/redirect';
import { rootReducer } from './rootReducer';

const db = getApiRef();
const auth = getAuthRef();

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        db,
        auth
      }
    }
  }).concat(redirect)
});

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
