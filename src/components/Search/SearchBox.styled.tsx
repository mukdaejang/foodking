import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Theme from '@/styles/theme';

export const SearchBar = css`
  width: 750px;
  z-index: 101;
`;

export const ModalSearchBar = css`
  width: 750px;

  position: relative;
  z-index: 101;
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

export const SearchBarContents = css`
  margin: 0;
  width: 100%;
  height: 100%;

  form {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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

export const SearchInput = css`
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

export const SearchBtn = css`
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

export const SpanDisplay = css`
  color: rgba(0, 0, 0, 0.4);
  margin-right: 20px;
  cursor: pointer;
  button {
    background-color: white;
  }
`;

export const AbsolutePosition = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const None = css`
  display: none;
`;
