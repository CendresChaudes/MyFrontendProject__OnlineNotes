import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const deleteNote = createAsyncThunk<
  string,
  [string, () => void],
  FirebaseThunkAPI
    >(
    'api/deleteNote',
    async ([id, callback], { dispatch, extra: api }) => {
      try {
        await deleteDoc(doc(api, APIRoute.Notes, id));

        if (callback) {
          callback();
        }

        return id;
      } catch {
        dispatch(
          changeNotification({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не удалось удалить заметку',
          })
        );

        throw new Error();
      }
    });
