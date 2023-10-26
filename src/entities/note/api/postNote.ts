import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
import { APIRoute } from '@/const';

export const postNote = createAsyncThunk<
  INoteData,
  [INoteData, () => void],
  FirebaseThunkAPI
    >
    ('api/postNote', async ([newNoteData, callback], { extra: api }) => {
      await setDoc(doc(api, APIRoute.Notes, newNoteData.id), newNoteData);

      if (callback) {
        callback();
      }

      return newNoteData;
    });
