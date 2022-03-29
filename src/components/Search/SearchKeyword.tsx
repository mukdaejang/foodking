import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { keywordStyle } from './SearchKeyword.styled';
import glassSolid from '@/assets/icons/glass-solid.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

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

  const KeywordSaveToLocalStorage = (keyword: string) => {
    let recentSearch: any = localStorage.getItem('recentSearch');
    recentSearch = recentSearch === null ? [] : JSON.parse(recentSearch);
    if (recentSearch.length > 5) {
      recentSearch = recentSearch.slice(0, 5);
    }
    recentSearch = new Set([keyword, ...recentSearch]);
    localStorage.setItem('recentSearch', JSON.stringify([...recentSearch]));
  };

  const onClick = (e: MouseEvent) => {
    let clickedText = (e.target as HTMLLIElement).textContent;
    clickedText && KeywordSaveToLocalStorage(clickedText);

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
