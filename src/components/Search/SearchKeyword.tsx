import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { keywordStyle } from './SearchKeyword.styled';
import glassSolid from '@/assets/icons/glass-solid.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';
import { keywordSuggestActions } from '@/store/searchkeyword/keyword-slice';
import { saveKeywordsToLocalStorage } from '@/utils';

interface PropType {
  suggest: string;
}

const SearchKeyword = ({ suggest }: PropType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  const URLTEXT = suggest.replace(/[ ]/gi, '');

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const saveKeywordToRedux = (str: string) =>
    dispatch(keywordSuggestActions.handleSearchKeyword(str));

  const onClick = (e: MouseEvent) => {
    let clickedText = (e.target as HTMLLIElement).textContent;
    clickedText && saveKeywordsToLocalStorage(clickedText);
    clickedText && saveKeywordToRedux(clickedText);
    handleSearchBackModal();
    navigate(`/search/${URLTEXT}`);
  };

  return (
    <li css={keywordStyle} onClick={onClick}>
      <img src={glassSolid} alt="glass-solid"></img>
      <button>{suggest}</button>
    </li>
  );
};

export default SearchKeyword;
