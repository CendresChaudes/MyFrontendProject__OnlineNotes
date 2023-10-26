import { useEffect } from 'react';
import { getNotes } from '@/entities/note';

export const useLoadNotes = (dispatch: AppDispatch) => {
  useEffect(() => {
    dispatch(getNotes());
  }, []);
};
