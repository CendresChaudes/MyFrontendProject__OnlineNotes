import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, runTransaction } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const postNote = createAsyncThunk<
  INoteData,
  { data: INoteData; callback?: () => void },
  FirebaseThunkAPI
    >(
    'api/postNote',
    async ({ data, callback }, { dispatch, extra: api }) => {
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
            text: 'Не удалось добавить новую заметку',
          })
        );

        throw new Error();
      }
    });
