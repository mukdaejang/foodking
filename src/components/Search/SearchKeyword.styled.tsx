import { css } from '@emotion/react';

export const keywordStyle = css`
  margin: 10px 0;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 20px;

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
  button {
    background-color: white;
  }
`;
