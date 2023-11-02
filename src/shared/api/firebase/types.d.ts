type FirebaseThunkAPI = {
  dispatch: AppDispatch;
  state: State;
  extra: {
    db: import('firebase/firestore').Firestore;
    auth: import('firebase/auth').Auth;
  };
}
