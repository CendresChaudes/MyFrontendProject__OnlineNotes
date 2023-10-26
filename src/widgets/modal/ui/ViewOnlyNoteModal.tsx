import { Modal, Card, Typography, Divider, Flex, Button } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {
  DATE_FORMAT,
  Mode,
  changeCurrentNote,
  changeMode,
  currentNoteSelector,
} from '@/entities/note';
import {
  isMobile,
  useAppDispatch,
  useAppSelector,
  useBreakpoint,
} from '@/shared/lib';
import styles from './styles.module.scss';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

export function ViewOnlyNoteModal() {
  const dispatch = useAppDispatch();
  const currentNote = useAppSelector(currentNoteSelector);
  const currentBreakpoint = useBreakpoint();

  const handleModalClose = () => {
    dispatch(changeMode(Mode.Idle));
    dispatch(changeCurrentNote(null));
  };

  const handleChangeToEditMode = () => {
    dispatch(changeMode(Mode.Edit));
  };

  const buttonSize = isMobile(currentBreakpoint) ? 'large' : 'middle';

  if (!currentNote) {
    return null;
  }

  return (
    <Modal
      className={styles.modal}
      open
      centered
      footer={false}
      onCancel={handleModalClose}
    >
      <Title className={styles.title} level={2}>
        {currentNote.title}
      </Title>

      <Divider />

      <Paragraph className={styles.text}>{currentNote.text}</Paragraph>

      <Meta
        className={styles.date}
        description={dayjs(currentNote.date).locale('ru').format(DATE_FORMAT)}
      />

      <Flex
        className={styles.buttons}
        vertical={isMobile(currentBreakpoint)}
        justify="center"
        gap="middle"
      >
        <Button
          htmlType="button"
          type="primary"
          size={buttonSize}
          onClick={handleChangeToEditMode}
        >
          Редактировать
        </Button>

        <Button
          htmlType="button"
          type="default"
          size={buttonSize}
          onClick={handleModalClose}
        >
          Закрыть
        </Button>
      </Flex>
    </Modal>
  );
}
