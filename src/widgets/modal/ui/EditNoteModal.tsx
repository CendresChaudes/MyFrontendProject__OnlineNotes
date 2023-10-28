import { Modal, Form, Input, Typography, Button, Flex } from 'antd';
import clsx from 'clsx';
import { ChangeEvent } from 'react';
import {
  Mode,
  changeMode,
  currentNoteSelector,
  updateNote,
  updateNoteStatusObjectSelector,
} from '@/entities/note';
import {
  useBreakpoint,
  isMobile,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';
import { validationRules } from '../const';
import styles from './styles.module.scss';

const { Title } = Typography;
const { Item } = Form;
const { TextArea } = Input;

export function EditNoteModal() {
  const dispatch = useAppDispatch();
  const currentNote = useAppSelector(currentNoteSelector);
  const updateNoteStatus = useAppSelector(updateNoteStatusObjectSelector);
  const currentBreakpoint = useBreakpoint();
  const [form] = Form.useForm();

  if (!currentNote) {
    return null;
  }

  const handleModalOpen = () => {
    form.setFieldsValue({ title: currentNote.title, text: currentNote.text });
  };

  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ title: evt.target.value });
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    form.setFieldsValue({ text: evt.target.value });
  };

  const handleFormReset = () => {
    form.resetFields();
  };

  const handleModeReset = () => {
    dispatch(changeMode(Mode.Idle));
  };

  const handleModalClose = () => {
    if (!updateNoteStatus.isPending) {
      handleFormReset();
      handleModeReset();
    }
  };

  const handleFormSubmit = ({
    title,
    text,
  }: Pick<INoteData, 'title' | 'text'>) => {
    dispatch(
      updateNote([
        {
          id: currentNote.id,
          title: title.trim(),
          text: text.trim(),
          date: Date.now(),
        },
        handleModeReset,
      ])
    );
  };

  const buttonSize = isMobile(currentBreakpoint) ? 'large' : 'middle';

  return (
    <Modal
      open
      centered
      footer={false}
      closeIcon={!updateNoteStatus.isPending}
      afterOpenChange={handleModalOpen}
      onCancel={handleModalClose}
    >
      <Title className={clsx(styles.title, styles['title--center'])} level={2}>
        Редактирование заметки
      </Title>

      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={handleFormSubmit}
      >
        <Item
          className={styles.label}
          label="Заголовок"
          name="title"
          rules={validationRules}
        >
          <Input
            className={styles.input}
            allowClear
            disabled={updateNoteStatus.isPending}
            onChange={handleTitleChange}
          />
        </Item>

        <Item
          className={styles.label}
          label="Текст"
          name="text"
          rules={validationRules}
        >
          <TextArea
            className={styles.textarea}
            rows={8}
            allowClear
            disabled={updateNoteStatus.isPending}
            onChange={handleTextChange}
          />
        </Item>

        <Flex
          className={styles.buttons}
          vertical={isMobile(currentBreakpoint)}
          justify="center"
          gap="middle"
        >
          <Button
            htmlType="submit"
            type="primary"
            size={buttonSize}
            loading={updateNoteStatus.isPending}
          >
            Сохранить
          </Button>

          <Button
            htmlType="button"
            type="default"
            size={buttonSize}
            disabled={updateNoteStatus.isPending}
            onClick={handleFormReset}
          >
            Сбросить
          </Button>

          <Button
            htmlType="button"
            danger
            size={buttonSize}
            disabled={updateNoteStatus.isPending}
            onClick={handleModalClose}
          >
            Отменить
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
