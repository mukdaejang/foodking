import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth-actions';

const initialState = {
  isLogin: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state = {
        isLogin: false,
        loading: true,
      };
    },
    [login.fulfilled.type]: (state) => {
      state = {
        isLogin: true,
        loading: false,
      };
    },
    [login.rejected.type]: (state) => {
      state = {
        isLogin: false,
        loading: false,
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
