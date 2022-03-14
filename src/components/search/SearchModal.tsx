import React from 'react';
import { css } from '@emotion/react';
import SearchKeyword from './SearchKeyword';
import { createPortal } from 'react-dom';

import glassSolid from '@/assets/icons/glass-solid.svg';

const openNavBox = css`
  position: absolute;
  width: 100%;

  z-index: 1000;
  background: white;
  color: black;
  margin: 0 auto;

  .keyword-suggester img {
    width: 20px;
    height: 20px;
  }
`;

const ulStyle = css`
  list-style-type: none;

  margin: 20px;
  display: flex;
  justify-content: center;
  li {
    padding: 10px 20px;
    cursor: pointer;
  }
  li:hover {
    opacity: 0.6;
  }
`;

const searchselected = css`
  color: #ff7100;
  border-bottom: 3px solid #ff7100;
`;

const display = css`
  display: block;
`;
const none = css`
  display: none;
`;

type Display = {
  modalOpen: boolean;
};

const SearchModal = ({ modalOpen }: Display) => {
  // return createPortal(
  // document.getElementById('search-modal') as HTMLElement,)

  return (
    <nav css={modalOpen ? openNavBox : none}>
      <ul css={ulStyle}>
        <li css={searchselected}>추천 검색어</li>
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
