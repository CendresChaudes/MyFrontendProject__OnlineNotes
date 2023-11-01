import { Layout } from 'antd';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SignIn } from '@/features/auth/signIn';
import { SignUp } from '@/features/auth/signUp';
import styles from './styles.module.scss';

const { Content } = Layout;

export function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleIsSignUpChange = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <>
      <Helmet>
        <title>Online Notes: вход в приложение</title>
      </Helmet>

      <Layout className={styles.layout}>
        <Content className={styles.content}>
          <h1 className="visually-hidden">{'Сервис "Online Notes".'}</h1>

          {isSignUp ? (
            <SignUp handleIsSignUpChange={handleIsSignUpChange} />
          ) : (
            <SignIn handleIsSignUpChange={handleIsSignUpChange} />
          )}
        </Content>
      </Layout>
    </>
  );
}
