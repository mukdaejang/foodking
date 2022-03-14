import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '@/utils';

export const login = createAsyncThunk('auth/login', async (userInfo) => {
  try {
    return [];
  } catch (error) {
    console.error(getErrorMessage(error));
  }
});
