import React, { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SearchKeyword from './SearchKeyword';

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
  let navigate = useNavigate();

  const onClick = (e: any) => {
    const $list = e.target.parentNode.childNodes;

    if (!e.target.classList.contains('search-selected')) {
      $list.forEach((elem: any) => {
        if (!elem.classList) return;
        if (elem.classList.contains('search-selected')) {
          elem.classList.remove('search-selected');
        }
      });
    }
    e.target.classList.add('search-selected');
  };

  const ulClick = ({ target }: any) => {
    // 이미 fetch 받은 데이터에서 filtering 해주는 방식으로
    // console.log(e.target);
  };

  const onKeywordClick = ({ target }: any) => {
    // 클릭된 것이 li라면 해당 textContent를
    // img일 경우 parentNode의 textContent
    console.log(target);
    // if (target.matches('.keyword-suggester > li')) {
    //   navigate(`/search/${target.textContent}`);
    // } else {
    //   navigate(`/search/${target.parentNode.textContent}`);
    // }
    navigate(`/search/${target.textContent}`);
  };

  return (
    <nav css={modalOpen ? openNavBox : none} onClick={onClick}>
      <ul css={ulStyle} onClick={ulClick}>
        <li className="search-selected">추천 검색어</li>
        <li>인기 검색어</li>
        <li>최근 검색어</li>
      </ul>
      <ul className="keyword-suggester" onClick={onKeywordClick}>
        {/* 리스트 렌더링 파트 */}
        <SearchKeyword
          setModalOpen={setModalOpen}
          keyword={'test'}
          key={1}
        ></SearchKeyword>
        <SearchKeyword
          setModalOpen={setModalOpen}
          keyword={'test2'}
          key={2}
        ></SearchKeyword>
        <SearchKeyword
          setModalOpen={setModalOpen}
          keyword={'test3'}
          key={3}
        ></SearchKeyword>
      </ul>
    </nav>
  );
};
export default SearchModal;
