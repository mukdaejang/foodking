import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface headerprops {
  isScroll: boolean;
  isMain: boolean;
}

export const StyledHeader = styled.header<headerprops>`
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-bottom: ${({ isMain, theme }) =>
    isMain ? 'none' : `${theme.colors.gray900}`};
  box-shadow: ${({ isMain, isScroll }) =>
    isMain
      ? isScroll
        ? '0 4px 11px rgb(0 0 0 / 10%)'
        : 'none'
      : '0 4px 11px rgb(0 0 0 / 10%)'};
  position: fixed;
  z-index: 101;
  width: 100%;
  top: 0;
  left: 0;

  background-color: ${({ isScroll, isMain }) =>
    isMain ? (isScroll ? 'white' : 'transparent') : 'white'};

  a {
    margin: 0 25px;
    text-decoration-line: none;

    img {
      width: 100px;
      height: 33px;
    }
  }
  /* input {
    width: 100%;
    height: 27px;
    margin-left: 13px;
    border: none;
    font-size: 14px;
    font-weight: 700;

    &:focus {
      outline: none;
    }
  } */
`;

export const Search = css`
  width: 100%;
  /* z-index: 101; */
`;

export const UlContainer = styled.ul<headerprops>`
  display: flex;
  list-style: none;
  margin-left: auto;

  li {
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: ${({ isScroll, isMain, theme }) =>
      isMain
        ? isScroll
          ? `1px solid ${theme.colors.gray900}`
          : 'none'
        : `1px solid ${theme.colors.gray900}`};

    span {
      color: ${({ isScroll, isMain, theme }) =>
        isMain
          ? isScroll
            ? `${theme.colors.gray800}`
            : `${theme.colors.white}`
          : `${theme.colors.gray800}`};

      font-size: 14px;
      font-weight: 700;
    }
  }
`;

export const UserLoginDiv = styled.div<headerprops>`
  height: 100%;
  width: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: ${({ isScroll, isMain, theme }) =>
    isMain
      ? isScroll
        ? `1px solid ${theme.colors.gray900}`
        : 'none'
      : `1px solid ${theme.colors.gray900}`};

  .profileImgBtn {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    border-radius: 34px;
    overflow: hidden;
    width: 38px;
    height: 38px;
  }

  button {
    border: none;
    color: ${({ isScroll, isMain, theme }) =>
      isMain
        ? isScroll
          ? `${theme.colors.gray500}`
          : 'white'
        : `${theme.colors.gray500}`};
    cursor: pointer;
    background-color: transparent;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const blankDiv = css`
  width: 0px;
  height: 60px;
`;

interface headerInputprops {
  isMain: boolean;
}

export const HeaderInput = styled.div<headerInputprops>(({ isMain }) =>
  isMain
    ? {
        visibility: 'hidden',
      }
    : {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '27px',
        flexGrow: '1',
        borderLeft: 'none !important',
      },
);

export const searchIcon = css`
  width: 25px;
  height: 25px;
  color: gray;
`;
