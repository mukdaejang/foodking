import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Sorting = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  input {
    display: none;
  }
  label {
    display: inline-block;
    width: 150px;
    font-size: 20px;
    padding: 10px;
    margin: 0 20px;
    text-align: center;
  }
`;

export const sortActive = css`
  border: ${theme.borders.border1};
  border-radius: ${theme.borders.radius};
  color: ${theme.colors.orange};
`;
export const sortDeactive = css`
  border: ${theme.borders.border0};
  border-radius: ${theme.borders.radius};
  color: ${theme.colors.gray500};
`;
