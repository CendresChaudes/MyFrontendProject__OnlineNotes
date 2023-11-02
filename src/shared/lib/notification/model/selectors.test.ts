// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Mode } from '@/entities/note/const';
import { APIStatus } from '../../../api/const';
import { notificationSelector } from './selectors';

describe('Redux selectors: "notification" domain', () => {
  const mockNotification = {
    type: 'error',
    title: 'Ошибка!',
    text: 'Не удалось отредактировать заметку',
  } as INotificationData;

  const mockStore: State = {
    user: {
      currentUser: null,
      getCurrentUserStatus: APIStatus.Idle,
      postUserStatus: APIStatus.Idle,
      signInStatus: APIStatus.Idle,
      signOutStatus: APIStatus.Idle,
    },
    note: {
      mode: Mode.Idle,
      notes: [],
      deletingNotesId: [],
      currentNote: null,
      getNotesStatus: APIStatus.Idle,
      postNoteStatus: APIStatus.Idle,
      deleteNoteStatus: APIStatus.Idle,
      updateNoteStatus: APIStatus.Idle,
    },
    notification: {
      notification: mockNotification,
    },
  };

  describe('Selector: notificationSelector', () => {
    test('Should return a mode', () => {
      const expectedResult = mockStore.notification.notification;

      const result = notificationSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });
});
