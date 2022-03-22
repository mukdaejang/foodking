import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSocialModalOpen: false,
  isOverlayModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleSocialModal(state) {
      state.isSocialModalOpen = !state.isSocialModalOpen;
    },
    handleOverlayModal(state) {
      state.isOverlayModalOpen = !state.isOverlayModalOpen;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
