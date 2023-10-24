import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { DATE_FORMAT } from '../const';
import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

interface INote {
  id: string;
  title: string;
  text: string;
  date: number;
}

export function Note({ id, title, text, date }: INote) {
  return (
    <Card
      className={styles.card}
      title={
        <Title className={styles.title} level={2}>
          {title}
        </Title>
      }
      actions={[<EditFilled key="edit" />, <DeleteFilled key="delete" />]}
      hoverable
    >
      <Paragraph className={styles.text} ellipsis={{ rows: 6 }}>{text}</Paragraph>
      <Meta className={styles.date} description={dayjs(date).locale('ru').format(DATE_FORMAT)} />
    </Card>
  );
}
