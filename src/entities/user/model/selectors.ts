import { createStatusObjectSelector } from '@/shared/lib';

export const currentUserSelector = (state: State) => state.user.currentUser;
export const getCurrentUserStatusSelector = (state: State) => state.user.getCurrentUserStatus;
export const postUserStatusSelector = (state: State) => state.user.postUserStatus;
export const signInStatusSelector = (state: State) => state.user.signInStatus;

export const getCurrentUserStatusObjectSelector = createStatusObjectSelector(getCurrentUserStatusSelector);
export const postUserStatusObjectSelector = createStatusObjectSelector(postUserStatusSelector);
export const signInStatusObjectSelector = createStatusObjectSelector(signInStatusSelector);
