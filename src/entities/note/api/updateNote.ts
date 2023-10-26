import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
import { APIRoute } from '@/const';

export const updateNote = createAsyncThunk<INoteData, INoteData, FirebaseThunkAPI>(
  'api/updateNote',
  async (newNoteData, { extra: api }) => {
    await setDoc(doc(api, APIRoute.Notes, newNoteData.id), newNoteData);

    return newNoteData;
  }
);
