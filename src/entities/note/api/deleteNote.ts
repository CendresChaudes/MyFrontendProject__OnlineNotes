import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { APIRoute } from '@/const';

export const deleteNote = createAsyncThunk<void, string, FirebaseThunkAPI>(
  'api/deleteNote',
  async (id, { extra: api }) => {
    await deleteDoc(doc(api, APIRoute.Notes, id));
  }
);
