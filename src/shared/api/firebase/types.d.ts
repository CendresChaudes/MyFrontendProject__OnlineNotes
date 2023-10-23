type FirebaseThunkAPI = {
  dispatch: AppDispatch;
  state: State;
  extra: import('firebase/firestore').Firestore;
}
