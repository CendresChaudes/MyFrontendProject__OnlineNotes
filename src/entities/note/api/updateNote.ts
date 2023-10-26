import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, runTransaction } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const updateNote = createAsyncThunk<
  INoteData,
  [INoteData, () => void],
  FirebaseThunkAPI
    >(
    'api/updateNote',
    async ([data, callback], { dispatch, extra: api }) => {
      try {
        const docRef = doc(api, APIRoute.Notes, data.id);

        // eslint-disable-next-line @typescript-eslint/require-await
        await runTransaction(api, async (transaction) => {
          transaction.set(docRef, data);
        });

        if (callback) {
          callback();
        }

        return data;
      } catch {
        dispatch(
          changeNotification({
            type: 'error',
            title: 'Ошибка!',
            text: 'Не удалось отредактировать заметку',
          })
        );

        throw new Error();
      }
    });
