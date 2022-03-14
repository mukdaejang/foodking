import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '@/utils';
import { loginGoogle } from '@/firebase';

export const login = createAsyncThunk('auth/login', async (userInfo) => {
  try {
    const result = await loginGoogle();
    return result.user.uid;
  } catch (error) {
    console.error(getErrorMessage(error));
  }
});
