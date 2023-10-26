import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, runTransaction } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const postNote = createAsyncThunk<
  INoteData,
  [INoteData, () => void],
  FirebaseThunkAPI
    >(
    'api/postNote',
    async ([newNoteData, callback], { dispatch, extra: api }) => {
      try {
        const noteId = newNoteData.id;
        const docRef = doc(api, APIRoute.Notes, noteId!);
        delete newNoteData['id'];

        // eslint-disable-next-line @typescript-eslint/require-await
        await runTransaction(api, async (transaction) => {
          transaction.set(docRef, newNoteData);
        });

        if (callback) {
          callback();
        }

        return { ...newNoteData, id: noteId };
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
