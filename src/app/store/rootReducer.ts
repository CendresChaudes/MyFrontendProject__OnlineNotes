import { combineReducers } from '@reduxjs/toolkit';
import { noteSlice } from '@/entities/note';
import { userSlice } from '@/entities/user';
import { notificationSlice } from '@/shared/lib';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [noteSlice.name]: noteSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
