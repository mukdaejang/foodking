import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSocialModalOpen: false,
  isOverlayModalOpen: false,
  isSearchBackModalOpen: false,
};

const handleBodyOverflow = (element: boolean) => {
  document.body.style.overflow = element ? 'hidden' : 'unset';
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    handleSocialModal(state) {
      state.isSocialModalOpen = !state.isSocialModalOpen;
      handleBodyOverflow(state.isSocialModalOpen);
    },
    handleOverlayModal(state) {
      state.isOverlayModalOpen = !state.isOverlayModalOpen;
      handleBodyOverflow(state.isOverlayModalOpen);
    },
    handleSearchBackModal(state) {
      state.isSearchBackModalOpen = !state.isSearchBackModalOpen;
      handleBodyOverflow(state.isSearchBackModalOpen);
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
