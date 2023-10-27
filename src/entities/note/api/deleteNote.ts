import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, runTransaction } from 'firebase/firestore';
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
        const docRef = doc(api, APIRoute.Notes, id);

        // eslint-disable-next-line @typescript-eslint/require-await
        await runTransaction(api, async (transaction) => {
          transaction.delete(docRef);
        });

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
