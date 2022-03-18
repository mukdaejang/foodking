import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '@/utils';
import { loginGoogle, loginFacebook, loginGithub } from '@/firebase/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (loginType: string) => {
    try {
      const result =
        loginType === 'Google'
          ? await loginGoogle()
          : loginType === 'Facebook'
          ? await loginFacebook()
          : await loginGithub();
      return result.user.uid;
    } catch (error) {
      console.error(getErrorMessage(error));
    }
  },
);
