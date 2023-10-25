import { FileAddOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import styles from './styles.module.scss';

export function AddNote() {
  return (
    <Card className={styles.card} hoverable>
      <FileAddOutlined className={styles.icon} />
      <Typography.Paragraph className={styles.text}>
        Добавить новую заметку
      </Typography.Paragraph>
    </Card>
  );
}
