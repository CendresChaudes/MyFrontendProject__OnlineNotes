import { useEffect } from 'react';
import { getNotes } from '@/entities/note';
import { currentUserSelector } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

export const useLoadNotes = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);

  useEffect(() => {
    if (currentUser) {
      dispatch(getNotes(currentUser));
    }
  }, [currentUser]);
};
