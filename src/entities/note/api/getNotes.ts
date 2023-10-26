import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { APIRoute } from '@/const';

export const getNotes = createAsyncThunk<
  INoteData[],
  undefined,
  FirebaseThunkAPI
>('api/getNotes', async (_, { extra: api }) => {
  const response = await getDocs(collection(api, APIRoute.Notes));

  return response.docs.map((item) => item.data() as INoteData);
});
