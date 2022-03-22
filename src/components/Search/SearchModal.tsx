import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchKeyword from './SearchKeyword';
import {
  UlContainer,
  openNavBox,
  selectedMenu,
  None,
} from './SearchBox.styled';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

const SearchModal = () => {
  const searchMenuKeywords = ['추천 검색어', '인기 검색어', '최근 검색어'];
  const searchSuggestKeywords = ['강남 맛집', '수원 맛집', '분당 맛집'];
  const [isSelectedMenu, setIsSelectedMenu] = useState('추천 검색어');
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const onClick = (e: any) => {
    setIsSelectedMenu(e.target.textContent);
  };

  const onKeywordClick = ({ target }: any) => {
    navigate(`/search/${target.textContent}`);
    handleSearchBackModal();
  };

  return (
    <nav css={isSearchBackModalOpen ? openNavBox : None}>
      <ul css={UlContainer}>
        {searchMenuKeywords.map((keyword) => (
          <li
            onClick={onClick}
            css={keyword === isSelectedMenu ? selectedMenu : ''}
            key={keyword}
          >
            {keyword}
          </li>
        ))}
      </ul>
      <ul className="keyword-suggester" onClick={onKeywordClick}>
        {searchSuggestKeywords.map((suggest) => (
          <SearchKeyword suggest={suggest}></SearchKeyword>
        ))}
      </ul>
    </nav>
  );
};
export default SearchModal;
