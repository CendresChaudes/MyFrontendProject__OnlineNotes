interface INoteData {
  id: string;
  title: string;
  text: string;
  date: number;
  user: IUserData['email'];
}
