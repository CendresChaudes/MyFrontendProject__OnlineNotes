import { Modal, Form, Input, Typography, Button, Flex } from 'antd';
import clsx from 'clsx';
import { ChangeEvent } from 'react';
import { Mode, changeMode, currentNoteSelector } from '@/entities/note';
import {
  useBreakpoint,
  isMobile,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';
import styles from './styles.module.scss';

const { Title } = Typography;
const { Item } = Form;
const { TextArea } = Input;

export function EditNoteModal() {
  const dispatch = useAppDispatch();
  const currentNote = useAppSelector(currentNoteSelector);
  const currentBreakpoint = useBreakpoint();
  const [form] = Form.useForm();

  if (!currentNote) {
    return undefined;
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

  const handleModalClose = () => {
    handleFormReset();
    dispatch(changeMode(Mode.Idle));
  };

  const buttonSize = isMobile(currentBreakpoint) ? 'large' : 'middle';

  return (
    <Modal
      open
      centered
      footer={false}
      afterOpenChange={handleModalOpen}
      onCancel={handleModalClose}
    >
      <Title className={clsx(styles.title, styles['title--center'])} level={2}>
        Редактирование заметки
      </Title>

      <Form form={form} layout="vertical" autoComplete="off">
        <Item
          className={styles.label}
          label="Заголовок"
          name="title"
          rules={[{ required: true, message: 'Обязательное поле' }]}
        >
          <Input
            className={styles.input}
            allowClear
            onChange={handleTitleChange}
          />
        </Item>

        <Item
          className={styles.label}
          label="Текст"
          name="text"
          rules={[{ required: true, message: 'Обязательное поле' }]}
        >
          <TextArea
            className={styles.textarea}
            rows={8}
            allowClear
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
          >
            Сохранить
          </Button>

          <Button
            htmlType="button"
            type="default"
            size={buttonSize}
            onClick={handleFormReset}
          >
            Сбросить
          </Button>

          <Button
            htmlType="button"
            danger
            size={buttonSize}
            onClick={handleModalClose}
          >
            Отменить
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
