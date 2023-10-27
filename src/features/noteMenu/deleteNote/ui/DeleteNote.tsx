import { DeleteFilled } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { MouseEvent, KeyboardEvent } from 'react';
import { deleteNote, deleteNoteStatusObjectSelector } from '@/entities/note';
import { isActivationKey, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import styles from './styles.module.scss';

interface IDeleteNote {
  id: string;
}

export function DeleteNote({ id }: IDeleteNote) {
  const dispatch = useAppDispatch();
  const deleteNoteStatus = useAppSelector(deleteNoteStatusObjectSelector);

  const handleNoteDeleteByClick = (evt: MouseEvent) => {
    evt.stopPropagation();

    dispatch(deleteNote(id));
  };

  const handleNoteDeleteByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt)) {
      dispatch(deleteNote(id));
    }
  };

  if (deleteNoteStatus.isPending) {
    return <Loader indicator={<LoadingOutlined className={styles.loader} />} />;
  }

  return (
    <DeleteFilled
      className={styles.icon}
      tabIndex={0}
      onClick={handleNoteDeleteByClick}
      onKeyDown={handleNoteDeleteByKeyDown}
    />
  );
}
