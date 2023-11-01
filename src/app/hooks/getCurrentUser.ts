import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { setCurrentUser, setCurrentUserStatus } from '@/entities/user';
import { APIStatus, getAuthRef } from '@/shared/api';
import { useAppDispatch } from '@/shared/lib';

export const useGetCurrentUser = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentUserStatus(APIStatus.Pending));

    onAuthStateChanged(getAuthRef(), (user) => {
      if (!user) {
        dispatch(setCurrentUser(null));
        dispatch(setCurrentUserStatus(APIStatus.Rejected));
        return;
      }

      dispatch(setCurrentUser(user.email as IUserData['email']));
      dispatch(setCurrentUserStatus(APIStatus.Fulfilled));
    });
  }, []);
};
