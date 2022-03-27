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
  const searchMenuKeywords = ['추천 검색어', '인기 검색어', '최근 검색어'];
  const searchSuggestKeywords = ['강남 맛집', '수원 맛집', '분당 맛집'];
  const [isSelectedMenu, setIsSelectedMenu] = useState<string>('추천 검색어');
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    let clickedMenu = (e.target as HTMLLIElement).textContent as string;
    setIsSelectedMenu(clickedMenu);
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      let clickedMenu = (e.target as HTMLLIElement).textContent as string;
      setIsSelectedMenu(clickedMenu);
    }
  };

  const onFocusOut = () => {
    handleSearchBackModal();
  };
  // const onKeywordClick = ({ target }: any) => {
  //   navigate(`/search/${target.textContent.replace(/[ ]/gi, '')}`);
  //   handleSearchBackModal();
  // };

  return (
    <nav css={isSearchBackModalOpen ? OpenNavBox : None}>
      <ul css={UlContainer}>
        {searchMenuKeywords.map((keyword) => (
          <li
            onClick={onClick}
            onKeyUp={onKeyUp}
            css={keyword === isSelectedMenu ? SelectedMenu : ''}
            key={keyword}
            tabIndex={0}
          >
            {keyword}
          </li>
        ))}
      </ul>
      <ul
        className="keyword-suggester"
        // onClick={onKeywordClick}
      >
        {searchSuggestKeywords.map((suggest) => (
          <SearchKeyword suggest={suggest} key={suggest}></SearchKeyword>
        ))}
      </ul>
    </nav>
  );
};
export default SearchModal;
