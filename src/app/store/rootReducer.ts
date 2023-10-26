import { combineReducers } from '@reduxjs/toolkit';
import { noteSlice } from '@/entities/note';
import { notificationSlice } from '@/shared/lib';

export const rootReducer = combineReducers({
  [noteSlice.name]: noteSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});
