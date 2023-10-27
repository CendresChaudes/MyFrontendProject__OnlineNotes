import { EditFilled } from '@ant-design/icons';
import { MouseEvent, KeyboardEvent } from 'react';
import {
  Mode,
  changeCurrentNote,
  changeMode,
  deletingNotesIdSelector,
} from '@/entities/note';
import { isActivationKey, useAppDispatch, useAppSelector } from '@/shared/lib';
import styles from './styles.module.scss';

interface IEditNote {
  data: INoteData;
}

export function EditNote({ data }: IEditNote) {
  const dispatch = useAppDispatch();
  const deletingNotesId = useAppSelector(deletingNotesIdSelector);

  const isNoteDeleting = deletingNotesId.includes(data.id);

  const handleEditNoteModalOpenBy = () => {
    dispatch(changeCurrentNote(data));
    dispatch(changeMode(Mode.Edit));
  };

  const handleEditNoteModalOpenByClick = (evt: MouseEvent) => {
    evt.stopPropagation();

    if (!isNoteDeleting) {
      handleEditNoteModalOpenBy();
    }
  };

  const handleEditNoteModalOpenByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt) && !isNoteDeleting) {
      handleEditNoteModalOpenBy();
    }
  };

  return (
    <EditFilled
      className={styles.icon}
      tabIndex={0}
      onClick={handleEditNoteModalOpenByClick}
      onKeyDown={handleEditNoteModalOpenByKeyDown}
    />
  );
}
