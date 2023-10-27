import { Card, Typography } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ReactNode } from 'react';
import { useAppDispatch } from '@/shared/lib';
import { DATE_FORMAT, Mode } from '../const';
import { changeMode, changeCurrentNote } from '../model/noteSlice';
import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

interface INote {
  data: INoteData;
  actionSlot: ReactNode[];
}

export function Note({ data, actionSlot }: INote) {
  const dispatch = useAppDispatch();

  const handleNoteClick = () => {
    dispatch(changeCurrentNote(data));
    dispatch(changeMode(Mode.ViewOnly));
  };

  return (
    <Card
      className={styles.card}
      title={
        <Title className={styles.title} level={2} ellipsis={{ rows: 1 }}>
          {data.title}
        </Title>
      }
      actions={actionSlot}
      hoverable
      tabIndex={0}
      onClick={handleNoteClick}
    >
      <Paragraph className={styles.text} ellipsis={{ rows: 6 }}>
        {data.text}
      </Paragraph>

      <Meta
        className={styles.date}
        description={dayjs(data.date).locale('ru').format(DATE_FORMAT)}
      />
    </Card>
  );
}
