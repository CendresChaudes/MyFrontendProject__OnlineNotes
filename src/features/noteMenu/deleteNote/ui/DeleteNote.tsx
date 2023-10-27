import { DeleteFilled, LoadingOutlined } from '@ant-design/icons';
import { MouseEvent, KeyboardEvent } from 'react';
import {
  changeCurrentNote,
  deleteNote,
  pushDeletingNoteId,
  deleteNoteStatusObjectSelector,
  deletingNotesIdSelector,
} from '@/entities/note';
import { isActivationKey, useAppDispatch, useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import styles from './styles.module.scss';

interface IDeleteNote {
  data: INoteData;
}

export function DeleteNote({ data }: IDeleteNote) {
  const dispatch = useAppDispatch();
  const deletingNotesId = useAppSelector(deletingNotesIdSelector);
  const deleteNoteStatus = useAppSelector(deleteNoteStatusObjectSelector);

  const isNoteDeleting = deletingNotesId.includes(data.id);

  const handleCurrentNoteChange = () => {
    dispatch(changeCurrentNote(null));
  };

  const handleNoteDeleteBy = () => {
    dispatch(pushDeletingNoteId(data.id));
    dispatch(changeCurrentNote(data));
    dispatch(deleteNote([data.id, handleCurrentNoteChange]));
  };

  const handleNoteDeleteByClick = (evt: MouseEvent) => {
    evt.stopPropagation();
    handleNoteDeleteBy();
  };

  const handleNoteDeleteByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt)) {
      handleNoteDeleteBy();
    }
  };

  if (deleteNoteStatus.isPending && isNoteDeleting) {
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
