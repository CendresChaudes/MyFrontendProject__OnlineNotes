import { FileAddOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { Mode, changeMode } from '@/entities/note';
import { useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

export function AddNote() {
  const dispatch = useAppDispatch();

  const handleAddNoteClick = () => {
    dispatch(changeMode(Mode.Add));
  };

  return (
    <Card className={styles.card} hoverable onClick={handleAddNoteClick}>
      <FileAddOutlined className={styles.icon} />
      <Typography.Paragraph className={styles.text}>
        Добавить новую заметку
      </Typography.Paragraph>
    </Card>
  );
}
