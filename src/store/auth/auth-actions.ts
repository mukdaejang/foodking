import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithSocial, SocialType } from '@/firebase/auth';
import { registUser } from '@/firebase/request';

export const login = createAsyncThunk(
  'auth/login',
  async (loginType: SocialType, { rejectWithValue }) => {
    try {
      const result = await loginWithSocial(loginType);
      console.log(result);
      if (!result) {
        return;
      }

      await registUser(result?.user?.uid);
      return result?.user?.uid;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
