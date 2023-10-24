import { Layout } from 'antd';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import styles from './styles.module.scss';

const { Content } = Layout;

export function MainPage() {
  return (
    <Layout className={styles.layout}>
      <Header />

      <Content className={styles.content}>
        <h1 className="visually-hidden">{'Сервис "Online notes".'}</h1>
      </Content>

      <Footer />
    </Layout>
  );
}
