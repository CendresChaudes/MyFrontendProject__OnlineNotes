export const modeSelector = (state: State) => state.note.mode;
export const notesSelector = (state: State) => state.note.notes;
export const currentNoteSelector = (state: State) => state.note.currentNote;
export const getNotesStatusSelector = (state: State) => state.note.getNotesStatus;
export const postNoteStatusSelector = (state: State) => state.note.postNoteStatus;
export const deleteNoteStatusSelector = (state: State) => state.note.deleteNoteStatus;
export const updateNoteStatusSelector = (state: State) => state.note.updateNoteStatus;
