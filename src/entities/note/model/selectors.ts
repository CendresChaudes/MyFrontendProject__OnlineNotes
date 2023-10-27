import { createStatusObjectSelector } from '@/shared/lib';

export const modeSelector = (state: State) => state.note.mode;
export const notesSelector = (state: State) => state.note.notes;
export const deletingNotesIdSelector = (state: State) => state.note.deletingNotesId;
export const currentNoteSelector = (state: State) => state.note.currentNote;
export const getNotesStatusSelector = (state: State) => state.note.getNotesStatus;
export const postNoteStatusSelector = (state: State) => state.note.postNoteStatus;
export const deleteNoteStatusSelector = (state: State) => state.note.deleteNoteStatus;
export const updateNoteStatusSelector = (state: State) => state.note.updateNoteStatus;

export const getNotesStatusObjectSelector = createStatusObjectSelector(getNotesStatusSelector);
export const postNoteStatusObjectSelector = createStatusObjectSelector(postNoteStatusSelector);
export const deleteNoteStatusObjectSelector = createStatusObjectSelector(deleteNoteStatusSelector);
export const updateNoteStatusObjectSelector = createStatusObjectSelector(updateNoteStatusSelector);
