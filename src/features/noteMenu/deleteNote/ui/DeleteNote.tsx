import { DeleteFilled } from '@ant-design/icons';
import { MouseEvent } from 'react';
import { deleteNote } from '@/entities/note';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

interface IDeleteNote {
  id: string;
}

export function DeleteNote({ id }: IDeleteNote) {
  const dispatch = useAppDispatch();

  const handleNoteDelete = (evt: MouseEvent) => {
    evt.stopPropagation();

    dispatch(deleteNote(id));
  };

  return <DeleteFilled className={styles.icon} onClick={handleNoteDelete} />;
}
