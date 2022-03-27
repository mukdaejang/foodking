import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputSearchKeyword: 'test',
};

const keywordSlice = createSlice({
  name: 'searchkeyword',
  initialState,
  reducers: {
    handleKeywordSuggest(state, action) {
      state.inputSearchKeyword = action.payload;
    },
  },
});

export const keywordSuggestActions = keywordSlice.actions;

export default keywordSlice.reducer;
