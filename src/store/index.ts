import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import auth from './auth/auth-slice';
import modal from './modal/modal-slice';
import user from './user/user-slice';
import searchkeyword from './searchkeyword/keyword-slice';
import restaurant from './restaurants/restaurants-slice';

const reducers = combineReducers({
  auth,
  modal,
  user,
  searchkeyword,
  restaurant,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
