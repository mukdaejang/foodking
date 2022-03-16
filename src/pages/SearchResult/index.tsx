import { css } from '@emotion/react';

const container = css`
  width: 100vw;
  height: 100vh;
  font-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchResult = () => {
  return <div css={container}>SearchResult</div>;
};

export default SearchResult;
