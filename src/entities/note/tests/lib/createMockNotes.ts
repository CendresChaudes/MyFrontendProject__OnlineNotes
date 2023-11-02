import { createMockCurrentNote } from './createMockCurrentNote';

export const createMockNotes = (): INoteData[] => Array.from({length: 3}, (_, index) => createMockCurrentNote(++index));
