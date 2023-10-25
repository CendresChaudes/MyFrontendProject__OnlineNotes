import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../const';

interface IInitialState {
  mode: Mode;
  currentNote: INoteData | null;
}

const initialState: IInitialState = {
  mode: Mode.Idle,
  currentNote: null
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
    changeCurrentNote(state, action: PayloadAction<INoteData | null>) {
      state.currentNote = action.payload;
    }
  }
});

export const { changeMode, changeCurrentNote } = noteSlice.actions;
