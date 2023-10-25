import { combineReducers } from '@reduxjs/toolkit';
import { noteSlice } from '@/entities/note';

export const rootReducer = combineReducers({
  noteSlice: noteSlice.reducer
});
