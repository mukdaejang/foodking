import { css } from '@emotion/react';

export const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 4px 11px rgb(0 0 0 / 10%);
  position: relative;

  a {
    margin: 0 25px;

    img {
      width: 100px;
      height: 33px;
      color: hotpink;
    }
  }

  input {
    width: 100%;
    height: 27px;
    margin-left: 13px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    &:focus {
      outline: none;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-left: auto;

    li {
      width: 130px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #dbdbdb;
    }
  }

  div {
    height: 100%;
    width: 86px;
    border-left: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;

    button {
      border: none;
      color: gray;
      background-color: white;
      cursor: pointer;
    }
  }
`;

export const searchDiv = css`
  display: flex;
  align-items: center;
  padding-left: 27px;
  flex-grow: 1;
`;
export const searchDivNone = css`
  visibility: hidden;
`;

export const liSpan = css`
  color: gray;
  font-size: 14px;
  font-weight: 700;
`;
export const liSpanMain = css`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
`;
export const headerLink = css`
  text-decoration-line: none;
`;

export const searchIcon = css`
  width: 25px;
  height: 25px;
  color: gray;
`;
