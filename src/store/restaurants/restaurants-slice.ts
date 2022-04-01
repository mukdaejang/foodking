import { createSlice } from '@reduxjs/toolkit';
import { request } from './restaurants-actions';
import { Posts } from '@/firebase/type';
import { modifyMenuData } from '@/utils';
import { startAfter } from 'firebase/firestore';

interface Restaurant {
  post: {
    loading: boolean;
    data: Posts | null;
    error: boolean;
  };
}

const initialState: Restaurant = {
  post: {
    loading: false,
    data: null,
    error: false,
  },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    removeReview(state, action) {
      if (state.post.data) {
        state.post.data.reviews = state.post.data.reviews?.filter(
          (review) => review.id !== action.payload,
        );
      }
    },
  },
  extraReducers: {
    [request.pending.type]: (state) => {
      state.post = {
        loading: true,
        data: null,
        error: false,
      };
    },
    [request.fulfilled.type]: (state, action) => {
      action.payload.menus = modifyMenuData(action.payload.menu);
      state.post = {
        loading: false,
        data: action.payload,
        error: false,
      };
    },
    [request.rejected.type]: (state) => {
      state.post = {
        loading: false,
        data: null,
        error: true,
      };
    },
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice.reducer;
