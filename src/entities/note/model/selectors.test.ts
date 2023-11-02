import { APIStatus } from '@/shared/api/const';
import { Mode } from '../const';
import { createMockNotes, createMockCurrentNote } from '../tests';
import {
  modeSelector,
  notesSelector,
  deletingNotesIdSelector,
  currentNoteSelector,
  getNotesStatusSelector,
  postNoteStatusSelector,
  deleteNoteStatusSelector,
  updateNoteStatusSelector
} from './selectors';

jest.mock('@/shared/lib', () => ({
  createStatusObjectSelector: () => ({}),
}));

describe('Redux selectors: "note" domain', () => {
  const mockNotes = createMockNotes();
  const mockDeletingNotesId = mockNotes.map((item) => item.id);
  const mockCurrentNote = createMockCurrentNote();

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
      notes: mockNotes,
      deletingNotesId: mockDeletingNotesId,
      currentNote: mockCurrentNote,
      getNotesStatus: APIStatus.Idle,
      postNoteStatus: APIStatus.Idle,
      deleteNoteStatus: APIStatus.Idle,
      updateNoteStatus: APIStatus.Idle,
    },
    notification: {
      notification: null,
    },
  };

  describe('Selector: modeSelector', () => {
    test('Should return a mode', () => {
      const expectedResult = mockStore.note.mode;

      const result = modeSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: notesSelector', () => {
    test('Should return an array of notes', () => {
      const expectedResult = mockStore.note.notes;

      const result = notesSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: deletingNotesIdSelector', () => {
    test('Should return an array of deleting notes id', () => {
      const expectedResult = mockStore.note.deletingNotesId;

      const result = deletingNotesIdSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: currentNoteSelector', () => {
    test('Should return a current note', () => {
      const expectedResult = mockStore.note.currentNote;

      const result = currentNoteSelector(mockStore);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('Selector: getNotesStatusSelector', () => {
    test('Should return a get notes status', () => {
      const expectedResult = mockStore.note.getNotesStatus;

      const result = getNotesStatusSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: postNoteStatusSelector', () => {
    test('Should return a post note status', () => {
      const expectedResult = mockStore.note.postNoteStatus;

      const result = postNoteStatusSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: deleteNoteStatusSelector', () => {
    test('Should return a delete note status', () => {
      const expectedResult = mockStore.note.deleteNoteStatus;

      const result = deleteNoteStatusSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });

  describe('Selector: updateNoteStatusSelector', () => {
    test('Should return a delete note status', () => {
      const expectedResult = mockStore.note.updateNoteStatus;

      const result = updateNoteStatusSelector(mockStore);

      expect(result).toBe(expectedResult);
    });
  });
});
