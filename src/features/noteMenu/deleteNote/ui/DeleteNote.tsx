import { DeleteFilled } from '@ant-design/icons';
import { MouseEvent, KeyboardEvent } from 'react';
import { deleteNote } from '@/entities/note';
import { isActivationKey, useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

interface IDeleteNote {
  id: string;
}

export function DeleteNote({ id }: IDeleteNote) {
  const dispatch = useAppDispatch();

  const handleNoteDeleteByClick = (evt: MouseEvent) => {
    evt.stopPropagation();

    dispatch(deleteNote(id));
  };

  const handleNoteDeleteByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt)) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <DeleteFilled
      className={styles.icon}
      tabIndex={0}
      onClick={handleNoteDeleteByClick}
      onKeyDown={handleNoteDeleteByKeyDown}
    />
  );
}
