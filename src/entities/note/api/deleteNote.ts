import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const deleteNote = createAsyncThunk<string, string, FirebaseThunkAPI>(
  'api/deleteNote',
  async (id, { dispatch, extra: api }) => {
    try {
      await deleteDoc(doc(api, APIRoute.Notes, id));

      return id;
    } catch {
      dispatch(
        changeNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось удалить заметку заметку',
        })
      );

      throw new Error();
    }
  }
);
