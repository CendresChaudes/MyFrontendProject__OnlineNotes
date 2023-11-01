import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIStatus } from '@/shared/api';
import { postUser } from '../api/postUser';

interface IInitialState {
  currentUser: Nullable<IUserData>;
  postUserStatus: APIStatus;
}

const initialState: IInitialState = {
  currentUser: null,
  postUserStatus: APIStatus.Idle,
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
      .addCase(postUser.fulfilled, (state, action: PayloadAction<IUserData>) => {
        state.postUserStatus = APIStatus.Fulfilled;
        state.currentUser = action.payload;
      })
      .addCase(postUser.rejected, (state) => {
        state.postUserStatus = APIStatus.Rejected;
      });
  }
});
