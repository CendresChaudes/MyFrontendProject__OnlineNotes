import { createStatusObjectSelector } from '@/shared/lib';

export const currentUserSelector = (state: State) => state.user.currentUser;
export const postUserStatusSelector = (state: State) => state.user.postUserStatus;

export const postUserStatusObjectSelector = createStatusObjectSelector(postUserStatusSelector);
