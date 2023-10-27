import { EditFilled } from '@ant-design/icons';
import { MouseEvent, KeyboardEvent } from 'react';
import { Mode, changeCurrentNote, changeMode } from '@/entities/note';
import { isActivationKey, useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

interface IEditNote {
  data: INoteData;
}

export function EditNote({ data }: IEditNote) {
  const dispatch = useAppDispatch();

  const handleEditNoteModalOpenByClick = (evt: MouseEvent) => {
    evt.stopPropagation();

    dispatch(changeCurrentNote(data));
    dispatch(changeMode(Mode.Edit));
  };

  const handleEditNoteModalOpenByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt)) {
      dispatch(changeCurrentNote(data));
      dispatch(changeMode(Mode.Edit));
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
