export const getModeSelector = (state: State) => state.note.mode;
export const getNotesSelector = (state: State) => state.note.notes;
export const getCurrentNoteSelector = (state: State) => state.note.currentNote;
export const getGetNotesStatusSelector = (state: State) => state.note.getNotesStatus;
export const getPostNoteStatusSelector = (state: State) => state.note.postNoteStatus;
export const getDeleteNoteStatusSelector = (state: State) => state.note.deleteNoteStatus;
export const getUpdateNoteStatusSelector = (state: State) => state.note.updateNoteStatus;
