export { postUser } from './api/postUser';
export { signIn } from './api/signIn';
export { signOut } from './api/signOut';
export {
  userSlice,
  setCurrentUser,
  setCurrentUserStatus,
} from './model/userSlice';
export {
  currentUserSelector,
  getCurrentUserStatusObjectSelector,
  postUserStatusObjectSelector,
  signInStatusObjectSelector,
  signOutStatusObjectSelector
} from './model/selectors';
