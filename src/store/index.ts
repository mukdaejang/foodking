import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/auth-slice';
import modal from './modal/modal-slice';
import user from './user/user-slice';
import searchkeyword from './searchkeyword/keyword-slice';

const store = configureStore({
  reducer: { auth, modal, user, searchkeyword },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
