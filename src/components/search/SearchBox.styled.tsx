import { css } from '@emotion/react';

export const searchBar = css`
  width: 60%;
  margin: 0 auto;
  margin-top: 60px;
`;

export const searchBar__field = css`
  margin: 0px;
  padding: 0px;

  height: 54px;
  background: white;

  margin: 0 auto;
  border: 1px solid rgba(255, 133, 0, 1);
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
  width: 70%;
  height: 100%;
  font-size: 20px;

  margin: 0;
  padding: 0;
  border: 0;
  :focus {
    outline: none;
  }
`;

export const searh__btn = css`
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: white;
  cursor: pointer;

  background-color: #ff7100;
  outline: none;
  border: none;
  border-radius: 40px;
  :hover {
    opacity: 0.6;
  }
`;

export const none = css`
  display: none;
`;
export const display = css`
  display: block;
  opacity: 0.5;
`;

export const position = css`
  position: relative;
  width: 100%;
  height: 100%;
`;
