import { Layout } from 'antd';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Modal } from '@/widgets/modal';
import { NotesList } from '@/widgets/notesList';
import { notesSelector } from '@/entities/note';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { useLoadNotes } from '../hooks/useLoadNotes';
import styles from './styles.module.scss';

const { Content } = Layout;

export function MainPage() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(notesSelector);
  useLoadNotes(dispatch);

  return (
    <Layout className={styles.layout}>
      <Header />

      <Content className={styles.content}>
        <h1 className="visually-hidden">{'Сервис "Online Notes".'}</h1>
        <NotesList notes={notes} />
        <Modal />
      </Content>

      <Footer />
    </Layout>
  );
}
