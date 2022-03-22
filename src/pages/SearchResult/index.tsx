import React from 'react';
import { css } from '@emotion/react';
import { Filter } from '@/components';
const container = css`
  width: 100vw;
  height: 100px;
  font-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchResult = () => {
  document.body.style.overflow = 'unset';
  return (
    <>
      <div css={container}>SearchResult</div>
      <Filter></Filter>
    </>
  );
};

export default SearchResult;
