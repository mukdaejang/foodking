import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputSearchKeyword: '',
  suggest: [''],
  popular: [''],
};

const keywordSlice = createSlice({
  name: 'searchkeyword',
  initialState,
  reducers: {
    handleKeywordSuggest(state, action) {
      state.inputSearchKeyword = action.payload;
    },
    handleSuggestKeyword(state, action) {
      state.suggest = [...action.payload];
    },
    handlePopularKeyword(state, action) {
      state.popular = [...action.payload];
    },
  },
});

export const keywordSuggestActions = keywordSlice.actions;

export default keywordSlice.reducer;
