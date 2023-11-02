import { Modal, Card, Typography, Divider, Flex, Button } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {
  DATE_FORMAT,
  changeCurrentNote,
  changeMode,
  currentNoteSelector,
  deleteNote,
} from '@/entities/note';
import {
  isMobile,
  useAppDispatch,
  useAppSelector,
  useBreakpoint,
} from '@/shared/lib';
import styles from './styles.module.scss';
import { Mode } from '@/const';

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

  const handleToEditModeChange = () => {
    dispatch(changeMode(Mode.Edit));
  };

  const handleToIdleModeChange = () => {
    dispatch(changeMode(Mode.Idle));
  };

  const handleNoteDelete = () => {
    if (currentNote) {
      dispatch(deleteNote([currentNote.id, handleToIdleModeChange]));
    }
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
          onClick={handleToEditModeChange}
        >
          Редактировать
        </Button>

        <Button
          htmlType="button"
          type="default"
          size={buttonSize}
          onClick={handleNoteDelete}
        >
          Удалить
        </Button>
      </Flex>
    </Modal>
  );
}
