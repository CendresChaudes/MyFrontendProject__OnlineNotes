import { combineReducers, createSlice } from '@reduxjs/toolkit';

const mockSlice = createSlice({
  name: 'mock',
  initialState: {
    mockData: '123'
  },
  reducers: {},
});

export const rootReducer = combineReducers({
  mockSlice: mockSlice.reducer
});
