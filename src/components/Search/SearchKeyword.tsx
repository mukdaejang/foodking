import React from 'react';
import { css } from '@emotion/react';
import glassSolid from '@/assets/icons/glass-solid.svg';

const keywordStyle = css`
  margin-top: 10px;
  display: flex;
  align-items: center;

  font-size: 25px;
  img {
    opacity: 0.6;
    padding: 10px;
    box-sizing: content-box;
    margin-right: 10px;
    padding: 10px;
  }
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const SearchKeyword = ({ keyword }: any) => {
  return (
    <>
      <li css={keywordStyle}>
        <img src={glassSolid} alt="glass-solid"></img>
        {keyword}
      </li>
    </>
  );
};

export default SearchKeyword;
