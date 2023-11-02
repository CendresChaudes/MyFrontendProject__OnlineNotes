import { APIStatus } from '@/shared/api/const';
import {
  currentUserSelector,
  getCurrentUserStatusSelector,
  postUserStatusSelector,
  signInStatusSelector,
  signOutStatusSelector
} from './selectors';
import { Mode } from '@/const';

jest.mock('@/shared/lib', () => ({
  createStatusObjectSelector: () => ({}),
}));

describe('Redux selectors: "user" domain', () => {
  const mockStore: State = {
    user: {
      currentUser: 'mockUser@mock.ru',
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
      notification: null,
    },
  };

  describe('Selector: currentUserSelector', () => {
    test('Should return a mode', () => {
      const expectedResult = mockStore.user.currentUser;

      const result = currentUserSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: getCurrentUserStatusSelector', () => {
    test('Should return an array of notes', () => {
      const expectedResult = mockStore.user.getCurrentUserStatus;

      const result = getCurrentUserStatusSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: postUserStatusSelector', () => {
    test('Should return an array of deleting notes id', () => {
      const expectedResult = mockStore.user.postUserStatus;

      const result = postUserStatusSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: signInStatusSelector', () => {
    test('Should return a current note', () => {
      const expectedResult = mockStore.user.signInStatus;

      const result = signInStatusSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: signOutStatusSelector', () => {
    test('Should return a get notes status', () => {
      const expectedResult = mockStore.user.signOutStatus;

      const result = signOutStatusSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

});
