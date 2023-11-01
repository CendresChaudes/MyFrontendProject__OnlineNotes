export { postUser } from './api/postUser';
export { signIn } from './api/signIn';
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
} from './model/selectors';
