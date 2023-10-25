import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../const';

interface IInitialState {
  mode: Mode;
}

const initialState: IInitialState = {
  mode: Mode.Idle
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    }
  }
});

export const { changeMode } = noteSlice.actions;
