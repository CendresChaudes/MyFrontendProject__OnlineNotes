import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, runTransaction } from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const getNotes = createAsyncThunk<
  INoteData[],
  undefined,
  FirebaseThunkAPI
>(
  'api/getNotes',
  async (_, { dispatch, extra: api }) => {
    try {
      const docsRef = collection(api, APIRoute.Notes);
      let data: unknown;

      await runTransaction(api, async () => {
        const response = await getDocs(docsRef);
        data = response.docs.map((item) => item.data() as INoteData);
      });

      return data as INoteData[];
    } catch {
      dispatch(
        changeNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось загрузить заметки',
        })
      );

      throw new Error();
    }
  });
