import { Card, Typography } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ReactNode, KeyboardEvent } from 'react';
import { isActivationKey, useAppDispatch, useAppSelector } from '@/shared/lib';
import { DATE_FORMAT } from '../const';
import { changeMode, changeCurrentNote } from '../model/noteSlice';
import { deletingNotesIdSelector } from '../model/selectors';
import styles from './styles.module.scss';
import { Mode } from '@/const';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

interface INote {
  data: INoteData;
  actionSlot: ReactNode[];
}

export function Note({ data, actionSlot }: INote) {
  const dispatch = useAppDispatch();
  const deletingNotesId = useAppSelector(deletingNotesIdSelector);

  const isNoteDeleting = deletingNotesId.includes(data.id);

  const handleViewOnlyNoteModalOpenBy = () => {
    dispatch(changeCurrentNote(data));
    dispatch(changeMode(Mode.ViewOnly));
  };

  const handleViewOnlyNoteModalOpenByClick = () => {
    if (!isNoteDeleting) {
      handleViewOnlyNoteModalOpenBy();
    }
  };

  const handleViewOnlyNoteModalOpenByKeyDown = (evt: KeyboardEvent) => {
    if (isActivationKey(evt) && !isNoteDeleting) {
      handleViewOnlyNoteModalOpenBy();
    }
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
      onClick={handleViewOnlyNoteModalOpenByClick}
      onKeyDown={handleViewOnlyNoteModalOpenByKeyDown}
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
