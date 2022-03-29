import { css } from '@emotion/react';
import theme from '@/styles/theme';

// SearchModal

export const OpenNavBox = css`
  position: absolute;
  left: 90px;

  width: 70%;
  z-index: 1000;
  background: white;
  color: black;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;

  .keyword-suggester img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const UlContainer = css`
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  li {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    span {
      padding: 15px 30px;
    }
  }
  li:hover {
    opacity: 0.6;
  }
`;

interface searchKeywordProps {
  isSelectedMenu: string;
  key: string;
}

export const SelectedMenu = css`
  color: #ff7100;
  border-bottom: 3px solid #ff7100;
`;

export const None = css`
  display: none;
`;

export const noRecentSearchKeyword = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 30px 10px;
`;
