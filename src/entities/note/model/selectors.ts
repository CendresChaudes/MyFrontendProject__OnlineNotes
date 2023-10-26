import { createStatusObjectSelector } from '@/shared/lib';

export const modeSelector = (state: State) => state.note.mode;
export const notesSelector = (state: State) => state.note.notes;
export const currentNoteSelector = (state: State) => state.note.currentNote;
const getNotesStatusSelector = (state: State) => state.note.getNotesStatus;
const postNoteStatusSelector = (state: State) => state.note.postNoteStatus;
const deleteNoteStatusSelector = (state: State) => state.note.deleteNoteStatus;
const updateNoteStatusSelector = (state: State) => state.note.updateNoteStatus;

export const getNotesStatusObjectSelector = createStatusObjectSelector(getNotesStatusSelector);
export const postNoteStatusObjectSelector = createStatusObjectSelector(postNoteStatusSelector);
export const deleteNoteStatusObjectSelector = createStatusObjectSelector(deleteNoteStatusSelector);
export const updateNoteStatusObjectSelector = createStatusObjectSelector(updateNoteStatusSelector);
