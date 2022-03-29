import React, { useState, MouseEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchKeyword from './SearchKeyword';
import {
  UlContainer,
  OpenNavBox,
  SelectedMenu,
  None,
} from './SearchModal.styled';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

const SearchModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { suggest, popular } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );
  const searchMenuKeywords = ['추천 검색어', '인기 검색어', '최근 검색어'];
  const [searchDisplayKeywords, setSearchDisplayKeywords] =
    useState<string[]>(suggest);
  const [isSelectedMenu, setIsSelectedMenu] = useState<string>('추천 검색어');
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const isSuggestKeyword = (clickedMenu: string) => {
    if (clickedMenu === '추천 검색어') {
      setSearchDisplayKeywords(suggest);
    } else if (clickedMenu === '인기 검색어') {
      setSearchDisplayKeywords(popular);
    } else {
      // 최근 검색어
      let recentSearch: any = localStorage.getItem('recentSearch');
      recentSearch = recentSearch === null ? [] : JSON.parse(recentSearch);
      setSearchDisplayKeywords(recentSearch);
    }
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    let clickedMenu = (e.target as HTMLLIElement).textContent as string;
    setIsSelectedMenu(clickedMenu);
    isSuggestKeyword(clickedMenu);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      let clickedMenu = (e.target as HTMLLIElement).textContent as string;
      setIsSelectedMenu(clickedMenu);
      isSuggestKeyword(clickedMenu);
    }
  };

  return (
    <nav css={isSearchBackModalOpen ? OpenNavBox : None}>
      <ul css={UlContainer}>
        {searchMenuKeywords.map((keyword) => (
          <li onClick={onClick} onKeyUp={onKeyUp} key={keyword} tabIndex={0}>
            <span css={keyword === isSelectedMenu ? SelectedMenu : ''}>
              {keyword}
            </span>
          </li>
        ))}
      </ul>
      <ul className="keyword-suggester">
        {searchDisplayKeywords.map((suggest) => (
          <SearchKeyword suggest={suggest} key={suggest}></SearchKeyword>
        ))}
      </ul>
    </nav>
  );
};
export default SearchModal;
