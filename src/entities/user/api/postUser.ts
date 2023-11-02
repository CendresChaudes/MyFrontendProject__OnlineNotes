import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { FirebaseError } from 'firebase/app';
import { FirebaseErrorCode } from '@/shared/api';
import { changeNotification, redirectToRoute } from '@/shared/lib';
import { AppRoute } from '@/const';

export const postUser = createAsyncThunk<void, IUserData, FirebaseThunkAPI>(
  'api/postUser',
  async (userData, { dispatch, extra: { auth } }) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      dispatch(redirectToRoute(AppRoute.Root));
    } catch (err) {
      let notificationText = 'Не удалось зарегистрировать аккаунт';

      if (FirebaseErrorCode.EmailExists === (err as FirebaseError).code) {
        notificationText = 'Пользователь с данной электронной почтой уже существует';
      }

      dispatch(
        changeNotification({
          type: 'error',
          title: 'Ошибка!',
          text: notificationText,
        })
      );

      throw new Error();
    }
  }
);
