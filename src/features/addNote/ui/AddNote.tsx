import { FileAddOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { KeyboardEvent } from 'react';
import { changeMode } from '@/entities/note';
import { useAppDispatch } from '@/shared/lib';
import { isActivationKey } from '@/shared/lib';
import styles from './styles.module.scss';
import { Mode } from '@/const';

export function AddNote() {
  const dispatch = useAppDispatch();

  const handleAddNoteModalOpenByClick = () => {
    dispatch(changeMode(Mode.Add));
  };

  const handleAddNoteModalOpenByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt)) {
      dispatch(changeMode(Mode.Add));
    }
  };

  return (
    <Card
      className={styles.card}
      hoverable
      tabIndex={0}
      onClick={handleAddNoteModalOpenByClick}
      onKeyDown={handleAddNoteModalOpenByKeyDown}
    >
      <FileAddOutlined className={styles.icon} />
      <Typography.Paragraph className={styles.text}>
        Добавить новую заметку
      </Typography.Paragraph>
    </Card>
  );
}
