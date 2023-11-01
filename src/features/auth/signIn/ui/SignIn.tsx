import { Form, Input, Button, InputRef, Flex, Typography } from 'antd';
import { Rule } from 'antd/es/form';
import { ChangeEvent, Ref, useRef } from 'react';
import { useBreakpoint, isMobile } from '@/shared/lib';
import { ValidationRule } from '../const';
import styles from './styles.module.scss';

const { Title, Text, Link } = Typography;
const { Item } = Form;
const { Password } = Input;

interface ISignIn {
  handleIsSignUpChange: () => void;
}

export function SignIn({ handleIsSignUpChange }: ISignIn) {
  const inputRef = useRef();
  const currentBreakpoint = useBreakpoint();
  const [form] = Form.useForm();

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ email: evt.target.value });
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    form.setFieldsValue({ password: evt.target.value });
  };

  const handleFormReset = () => {
    form.resetFields();
  };

  const handleFormSubmit = ({ email, password }) => {
    console.log(email, password);
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
        Авторизация
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
          disabled={false}
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
          disabled={false}
          onChange={handlePasswordChange}
        />
      </Item>

      <div className={styles['sign-up-wrapper']}>
        <Text>Нет аккаунта?</Text>{' '}
        <Link onClick={handleIsSignUpChange}>Зарегистрировать</Link>
      </div>

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
          loading={false}
        >
          Войти
        </Button>

        <Button
          htmlType="button"
          type="link"
          danger
          size={buttonSize}
          disabled={false}
          onClick={handleFormReset}
        >
          Сбросить
        </Button>
      </Flex>
    </Form>
  );
}
