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

export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
