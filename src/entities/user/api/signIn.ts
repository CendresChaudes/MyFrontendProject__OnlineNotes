import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuthRef } from '@/shared/api';
import { changeNotification } from '@/shared/lib';

export const signIn = createAsyncThunk<
  IUserData,
  IUserData,
  FirebaseThunkAPI
    >(
      'api/signIn',
      async (userData, { dispatch }) => {
        try {
          await signInWithEmailAndPassword(
            getAuthRef(),
            userData.email,
            userData.password
          );

          return userData;
        } catch (err) {
          dispatch(
            changeNotification({
              type: 'error',
              title: 'Ошибка!',
              text: 'Не удалось авторизоваться',
            })
          );

          throw new Error();
        }
      });
