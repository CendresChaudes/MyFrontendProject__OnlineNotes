import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut as signOutFirebase } from 'firebase/auth';
import { getAuthRef } from '@/shared/api';
import { changeNotification, redirectToRoute } from '@/shared/lib';
import { AppRoute } from '@/const';

export const signOut = createAsyncThunk<void, undefined, FirebaseThunkAPI>(
  'api/signOut',
  async (_, { dispatch }) => {
    try {
      await signOutFirebase(getAuthRef());

      dispatch(redirectToRoute(AppRoute.Auth));
    } catch {
      dispatch(
        changeNotification({
          type: 'error',
          title: 'Ошибка!',
          text: 'Не удалось выйти из аккаунта',
        })
      );

      throw new Error();
    }
  }
);
