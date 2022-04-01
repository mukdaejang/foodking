import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogin: false,
  userProfileImage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleUserLogin(state, action) {
      state.isUserLogin = action.payload;
    },
    setUserProfileImage(state, action) {
      state.userProfileImage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
