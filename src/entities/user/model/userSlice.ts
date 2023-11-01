import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { postUser } from '../api/postUser';
import { signIn } from '../api/signIn';

interface IInitialState {
  currentUser: Nullable<IUserData>;
  postUserStatus: APIStatus;
  signInStatus: APIStatus;
}

const initialState: IInitialState = {
  currentUser: null,
  postUserStatus: APIStatus.Idle,
  signInStatus: APIStatus.Idle,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
      .addCase(signIn.fulfilled, (state, action: PayloadAction<IUserData>) => {
        state.signInStatus = APIStatus.Fulfilled;
        state.currentUser = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.signInStatus = APIStatus.Rejected;
      });
  },
});
