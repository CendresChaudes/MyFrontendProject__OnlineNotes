import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  getDocs,
  runTransaction,
  query,
  where
} from 'firebase/firestore';
import { changeNotification } from '@/shared/lib';
import { APIRoute } from '@/const';

export const getNotes = createAsyncThunk<
  INoteData[],
  IUserData['email'],
  FirebaseThunkAPI
>(
  'api/getNotes',
  async (user, { dispatch, extra: { db } }) => {
    try {
      let data: unknown;
      const q = query(collection(db, APIRoute.Notes), where('user', '==', user));

      await runTransaction(db, async () => {
        const response = await getDocs(q);

        if (response.docs) {
          data = response.docs
            .map((item) => item.data() as INoteData)
            .sort((a, b) => b.date - a.date);
        }
      });

      return data as INoteData[];
    } catch (err) {
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
