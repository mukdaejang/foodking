import { css } from '@emotion/react';
import glassSolid from '@/assets/icons/glass-solid.svg';

const keywordStyle = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  img {
    opacity: 0.6;
    padding: 10px;
    box-sizing: content-box;
  }
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const SearchKeyword = () => {
  return (
    <li css={keywordStyle}>
      <img src={glassSolid} alt="glass-solid"></img>test
    </li>
  );
};

export default SearchKeyword;
