export const createMockCurrentNote = (id = 1): INoteData => ({
  id: `mockId ${id}`,
  title: `mockTitle ${id}`,
  text: `mockText ${id}`,
  date: 1234567890,
  user: `mockUser ${id}`
});
