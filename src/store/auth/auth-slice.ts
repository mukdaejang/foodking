import { createSlice } from '@reduxjs/toolkit';
import { login } from './auth-actions';

const initialState = {
  status: {
    isLogin: false,
    loading: false,
    uid: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.status = {
        isLogin: false,
        loading: true,
        uid: '',
      };
    },
    [login.fulfilled.type]: (state, action) => {
      // navigate
      state.status = {
        isLogin: true,
        loading: false,
        uid: action.payload,
      };
    },
    [login.rejected.type]: (state) => {
      alert('로그인에 실패하였습니다.');
      state.status = {
        isLogin: false,
        loading: false,
        uid: '',
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
