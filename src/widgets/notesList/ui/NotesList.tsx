import { Row, Col } from 'antd';
import { AddNote } from '@/features/addNote';
import { DeleteNote, EditNote } from '@/features/noteMenu';
import {
  Note,
  getNotesStatusObjectSelector,
  notesSelector,
} from '@/entities/note';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { Loader } from '@/shared/ui';
import { useLoadNotes } from '../hooks/useLoadNotes';
import styles from './styles.module.scss';

export function NotesList() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(notesSelector);
  const getNotesStatusObject = useAppSelector(getNotesStatusObjectSelector);

  useLoadNotes(dispatch);

  if (getNotesStatusObject.isUncompleted) {
    return <Loader />;
  }

  return (
    <Row
      gutter={[
        { xs: 25, sm: 15, md: 20, lg: 25, xl: 30, xxl: 35 },
        { xs: 25, sm: 15, md: 20, lg: 25, xl: 30, xxl: 35 },
      ]}
    >
      <Col
        className={styles.col}
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 6 }}
      >
        <AddNote />
      </Col>

      {notes.map((note) => (
        <Col
          className={styles.col}
          key={note.id}
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
        >
          <Note
            data={note}
            actionSlot={[
              <EditNote data={note} key="edit" />,
              <DeleteNote data={note} key="delete" />,
            ]}
          />
        </Col>
      ))}
    </Row>
  );
}
