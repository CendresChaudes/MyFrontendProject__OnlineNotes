import { EditFilled } from '@ant-design/icons';
import { MouseEvent } from 'react';
import { Mode, changeCurrentNote, changeMode } from '@/entities/note';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

interface IEditNote {
  data: INoteData;
}

export function EditNote({ data }: IEditNote) {
  const dispatch = useAppDispatch();

  const handleNoteEditClick = (evt: MouseEvent) => {
    evt.stopPropagation();

    dispatch(changeCurrentNote(data));
    dispatch(changeMode(Mode.Edit));
  };

  return <EditFilled className={styles.icon} onClick={handleNoteEditClick} />;
}
