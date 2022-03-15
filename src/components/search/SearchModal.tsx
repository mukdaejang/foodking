import React from 'react';
import { css } from '@emotion/react';
import SearchKeyword from './SearchKeyword';
import { createPortal } from 'react-dom';

import glassSolid from '@/assets/icons/glass-solid.svg';

const openNavBox = css`
  position: absolute;
  width: 110%;

  z-index: 1000;
  background: white;
  color: black;
  margin: 0 auto;

  .keyword-suggester img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

const ulStyle = css`
  list-style-type: none;
  margin: 10px 0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;

  li {
    padding: 10px 20px;
    cursor: pointer;
  }
  li:hover {
    opacity: 0.6;
  }
  .search-selected {
    color: #ff7100;
    border-bottom: 3px solid #ff7100;
  }
`;

const none = css`
  display: none;
`;

type Display = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchModal = ({ modalOpen, setModalOpen }: Display) => {
  const onClick = (e: any) => {
    const $list = e.target.parentNode.childNodes;

    if (!e.target.classList.contains('search-selected')) {
      $list.forEach((elem: any) => {
        if (elem.classList.contains('search-selected')) {
          elem.classList.remove('search-selected');
        }
      });
    }
    e.target.classList.add('search-selected');
  };

  const ulClick = (e: any) => {
    console.log(e.target.classList);
  };
  // 이미 fetch 받은 데이터에서 filtering 해주는 방식으로
  return (
    <nav css={modalOpen ? openNavBox : none} onClick={onClick}>
      <ul css={ulStyle} onClick={ulClick}>
        <li className="search-selected">추천 검색어</li>
        <li>인기 검색어</li>
        <li>최근 검색어</li>
      </ul>
      <div className="keyword-suggester">
        <SearchKeyword></SearchKeyword>
      </div>
    </nav>
  );
};
export default SearchModal;
