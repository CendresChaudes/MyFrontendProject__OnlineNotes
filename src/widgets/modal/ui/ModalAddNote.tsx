import { Modal, Form, Input, Typography, Button, Flex } from 'antd';
import { ChangeEvent } from 'react';
import { Mode, changeMode } from '@/entities/note';
import { useBreakpoint, isMobile, useAppDispatch } from '@/shared/lib';
import styles from './styles.module.scss';

const { Title } = Typography;
const { Item } = Form;
const { TextArea } = Input;

export function ModalAddNote() {
  const dispatch = useAppDispatch();
  const currentBreakpoint = useBreakpoint();
  const [form] = Form.useForm();

  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ title: evt.target.value });
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    form.setFieldsValue({ text: evt.target.value });
  };

  const onResetForm = () => {
    form.resetFields();
  };

  const onFormClose = () => {
    onResetForm();
    dispatch(changeMode(Mode.Idle));
  };

  const buttonSize = isMobile(currentBreakpoint) ? 'large' : 'middle';

  return (
    <Modal open centered footer={false} onCancel={onFormClose}>
      <Title className={styles.title} level={2}>
        Новая заметка
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
          <Button htmlType="submit" type="primary" size={buttonSize}>
            Добавить
          </Button>

          <Button
            htmlType="button"
            type="default"
            size={buttonSize}
            onClick={onResetForm}
          >
            Сбросить
          </Button>

          <Button
            htmlType="button"
            danger
            size={buttonSize}
            onClick={onFormClose}
          >
            Отменить
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
}
