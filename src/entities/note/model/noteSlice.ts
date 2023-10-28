import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { deleteNote } from '../api/deleteNote';
import { getNotes } from '../api/getNotes';
import { postNote } from '../api/postNote';
import { updateNote } from '../api/updateNote';
import { Mode } from '../const';

interface IInitialState {
  mode: Mode;
  notes: INoteData[];
  deletingNotesId: string[];
  currentNote: Nullable<INoteData>;
  getNotesStatus: APIStatus;
  postNoteStatus: APIStatus;
  deleteNoteStatus: APIStatus;
  updateNoteStatus: APIStatus;
}

const initialState: IInitialState = {
  mode: Mode.Idle,
  notes: [],
  deletingNotesId: [],
  currentNote: null,
  getNotesStatus: APIStatus.Idle,
  postNoteStatus: APIStatus.Idle,
  deleteNoteStatus: APIStatus.Idle,
  updateNoteStatus: APIStatus.Idle,
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    changeMode(state, action: PayloadAction<Mode>) {
      state.mode = action.payload;
    },
    changeCurrentNote(state, action: PayloadAction<Nullable<INoteData>>) {
      state.currentNote = action.payload;
    },
    pushDeletingNoteId(state, action: PayloadAction<string>) {
      state.deletingNotesId.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.getNotesStatus = APIStatus.Pending;
      })
      .addCase(getNotes.fulfilled, (state, action: PayloadAction<INoteData[]>) => {
        state.getNotesStatus = APIStatus.Fulfilled;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state) => {
        state.getNotesStatus = APIStatus.Rejected;
      })
      .addCase(postNote.pending, (state) => {
        state.postNoteStatus = APIStatus.Pending;
      })
      .addCase(postNote.fulfilled, (state, action: PayloadAction<INoteData>) => {
        state.postNoteStatus = APIStatus.Fulfilled;
        state.notes.unshift(action.payload);
      })
      .addCase(postNote.rejected, (state) => {
        state.postNoteStatus = APIStatus.Rejected;
      })
      .addCase(updateNote.pending, (state) => {
        state.updateNoteStatus = APIStatus.Pending;
      })
      .addCase(updateNote.fulfilled, (state, action: PayloadAction<INoteData>) => {
        state.updateNoteStatus = APIStatus.Fulfilled;
        state.notes = state.notes.filter((item) => item.id !== action.payload.id);
        state.notes.unshift(action.payload);
      })
      .addCase(updateNote.rejected, (state) => {
        state.updateNoteStatus = APIStatus.Rejected;
      })
      .addCase(deleteNote.pending, (state) => {
        state.deleteNoteStatus = APIStatus.Pending;
      })
      .addCase(deleteNote.fulfilled, (state, action: PayloadAction<string>) => {
        state.deleteNoteStatus = APIStatus.Fulfilled;
        state.notes = state.notes.filter((item) => item.id !== action.payload);
        state.deletingNotesId = state.deletingNotesId.filter((item) => item !== action.payload);
      })
      .addCase(deleteNote.rejected, (state) => {
        state.deleteNoteStatus = APIStatus.Rejected;
      });
  }
});

export const { changeMode, changeCurrentNote, pushDeletingNoteId } = noteSlice.actions;
