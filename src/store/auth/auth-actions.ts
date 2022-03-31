import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithSocial, SocialType } from '@/firebase/auth';
import { registUser } from '@/firebase/request';

export const login = createAsyncThunk(
  'auth/login',
  async (loginType: SocialType, { rejectWithValue }) => {
    try {
      const result = await loginWithSocial(loginType);

      if (!result) {
        return;
      }

      await registUser(
        result?.user?.uid,
        result?.user?.displayName,
        result?.user?.providerData[0].photoURL,
      );
      return result?.user?.uid;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
