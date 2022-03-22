import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithSocial, SocialType } from '@/firebase/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (loginType: SocialType, { rejectWithValue }) => {
    try {
      const result = await loginWithSocial(loginType);
      console.log(result.user.photoURL);
      return result?.user?.uid;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
