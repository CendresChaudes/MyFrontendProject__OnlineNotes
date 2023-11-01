import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { FirebaseError } from 'firebase/app';
import { FirebaseErrorCode, getAuthRef } from '@/shared/api';
import { changeNotification } from '@/shared/lib';

export const postUser = createAsyncThunk<
  void,
  { userData: IUserData; callback?: () => void },
  FirebaseThunkAPI
    >(
    'api/postUser',
    async ({ userData, callback }, { dispatch }) => {
      try {
        await createUserWithEmailAndPassword(
          getAuthRef(),
          userData.email,
          userData.password
        );

        if (callback) {
          callback();
        }
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
    });
