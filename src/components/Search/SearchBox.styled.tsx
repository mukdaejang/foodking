import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Theme from '@/styles/theme';

export const searchBar = css`
  width: 60%;
  margin: 0 auto;
  margin-top: 60px;
`;

export const modalSearchBar = css`
  width: 60%;
  margin: 0 auto;
  margin-top: 60px;

  position: relative;
  z-index: 1000;
`;

export const SearchBarField = styled.fieldset`
  margin: 0px;
  padding: 0px;

  height: 54px;
  background: white;

  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 40px;
`;

export const findImgStyle = css`
  box-sizing: content-box;
  width: 30px;
  height: 31px;
  padding: 30px;
  opacity: 0.5;
`;

export const searchBar__contents = css`
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .contents__left {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .contents__right {
    width: 200px;
    height: 100%;

    display: flex;
    align-items: center;
  }
`;

export const search__input = css`
  width: 100%;
  height: 100%;
  font-size: 20px;

  margin: 0;
  padding: 0;
  border: 0;
  :focus {
    outline: none;
  }
`;

export const search__link = css`
  width: 100%;
  height: 100%;

  text-decoration-line: none;
  color: white;
`;
export const search__btn = css`
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: ${Theme.colors.orange};
  color: white;
  border-radius: 40px;
  :hover {
    opacity: 0.6;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const none = css`
  display: none;
`;
export const spanDisplay = css`
  color: rgba(0, 0, 0, 0.4);
  margin-right: 20px;
  cursor: pointer;
  button {
    background-color: white;
  }
`;

export const position = css`
  position: relative;
  width: 100%;
  height: 100%;
`;
