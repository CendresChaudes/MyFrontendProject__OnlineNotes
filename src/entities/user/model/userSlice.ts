import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { postUser } from '../api/postUser';
import { signIn } from '../api/signIn';

interface IInitialState {
  currentUser: Nullable<IUserData['email']>;
  getCurrentUserStatus: APIStatus;
  postUserStatus: APIStatus;
  signInStatus: APIStatus;
}

const initialState: IInitialState = {
  currentUser: null,
  getCurrentUserStatus: APIStatus.Idle,
  postUserStatus: APIStatus.Idle,
  signInStatus: APIStatus.Idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<Nullable<IUserData['email']>>) {
      state.currentUser = action.payload;
    },
    setCurrentUserStatus(state, action: PayloadAction<APIStatus>) {
      state.getCurrentUserStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.postUserStatus = APIStatus.Pending;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.postUserStatus = APIStatus.Fulfilled;
      })
      .addCase(postUser.rejected, (state) => {
        state.postUserStatus = APIStatus.Rejected;
      })
      .addCase(signIn.pending, (state) => {
        state.signInStatus = APIStatus.Pending;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<IUserData['email']>) => {
        state.signInStatus = APIStatus.Fulfilled;
        state.currentUser = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.signInStatus = APIStatus.Rejected;
      });
  },
});

export const { setCurrentUser, setCurrentUserStatus } = userSlice.actions;
