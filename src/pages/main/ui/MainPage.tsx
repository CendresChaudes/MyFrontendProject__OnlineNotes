import { Layout } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Modal } from '@/widgets/modal';
import { NotesList } from '@/widgets/notesList';
import styles from './styles.module.scss';

const { Content } = Layout;

export function MainPage() {
  return (
    <>
      <Helmet>
        <title>Online Notes: главная страница</title>
      </Helmet>

      <Layout className={styles.layout}>
        <Header />

        <Content className={styles.content}>
          <h1 className="visually-hidden">{'Сервис "Online Notes".'}</h1>
          <NotesList />
          <Modal />
        </Content>

        <Footer />
      </Layout>
    </>
  );
}
