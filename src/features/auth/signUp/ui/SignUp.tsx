import { Form, Input, Button, InputRef, Flex, Typography } from 'antd';
import { Rule } from 'antd/es/form';
import { ChangeEvent, Ref, useRef } from 'react';
import { postUser, postUserStatusObjectSelector } from '@/entities/user';
import {
  useBreakpoint,
  isMobile,
  useAppDispatch,
  useAppSelector,
} from '@/shared/lib';
import { ValidationRule } from '../const';
import styles from './styles.module.scss';

const { Title } = Typography;
const { Item } = Form;
const { Password } = Input;

interface ISignUp {
  onIsSignUpChange: () => void;
}

export function SignUp({ onIsSignUpChange }: ISignUp) {
  const dispatch = useAppDispatch();
  const inputRef = useRef();
  const postUserStatus = useAppSelector(postUserStatusObjectSelector);
  const currentBreakpoint = useBreakpoint();
  const [form] = Form.useForm();

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ email: evt.target.value });
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ password: evt.target.value });
  };

  const handlePasswordConfirmChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ passwordConfirm: evt.target.value });
  };

  const handleFormReset = () => {
    form.resetFields();
  };

  const handleFormSubmit = ({ email, password }: IUserData) => {
    dispatch(
      postUser({
        email: email.trim(),
        password: password.trim(),
      })
    );
  };

  const buttonSize = isMobile(currentBreakpoint) ? 'large' : 'middle';

  return (
    <Form
      className={styles.form}
      form={form}
      layout="vertical"
      autoComplete="off"
      onFinish={handleFormSubmit}
    >
      <Title className={styles.title} level={2}>
        Регистрация
      </Title>

      <Item
        className={styles.label}
        label="Электронная почта"
        name="email"
        rules={ValidationRule.Email as Rule[]}
      >
        <Input
          className={styles.input}
          allowClear
          ref={inputRef as unknown as Ref<InputRef>}
          disabled={postUserStatus.isPending}
          onChange={handleEmailChange}
        />
      </Item>

      <Item
        className={styles.label}
        label="Пароль"
        name="password"
        rules={ValidationRule.Password as Rule[]}
      >
        <Password
          className={styles.input}
          allowClear
          disabled={postUserStatus.isPending}
          onChange={handlePasswordChange}
        />
      </Item>

      <Item
        className={styles.label}
        label="Повторите пароль"
        name="password-confirm"
        dependencies={['password']}
        rules={ValidationRule.PasswordConfirm as Rule[]}
      >
        <Password
          className={styles.input}
          allowClear
          disabled={postUserStatus.isPending}
          onChange={handlePasswordConfirmChange}
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
          loading={postUserStatus.isPending}
        >
          Создать
        </Button>

        <Button
          htmlType="button"
          type="link"
          size={buttonSize}
          disabled={postUserStatus.isPending}
          onClick={onIsSignUpChange}
        >
          Назад
        </Button>

        <Button
          htmlType="button"
          type="link"
          danger
          size={buttonSize}
          disabled={postUserStatus.isPending}
          onClick={handleFormReset}
        >
          Сбросить
        </Button>
      </Flex>
    </Form>
  );
}
