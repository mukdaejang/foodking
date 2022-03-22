import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchKeyword from './SearchKeyword';
import {
  UlContainer,
  openNavBox,
  selectedMenu,
  None,
} from './SearchBox.styled';

type Display = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = ({ modalOpen, setModalOpen }: Display) => {
  const searchMenuKeywords = ['추천 검색어', '인기 검색어', '최근 검색어'];
  const searchSuggestKeywords = ['강남 맛집', '수원 맛집', '분당 맛집'];

  const [isSelectedMenu, setIsSelectedMenu] = useState('추천 검색어');
  const navigate = useNavigate();

  const onClick = (e: any) => {
    setIsSelectedMenu(e.target.textContent);
  };

  const onKeywordClick = ({ target }: any) => {
    navigate(`/search/${target.textContent}`);
  };

  return (
    <nav css={modalOpen ? openNavBox : None}>
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
