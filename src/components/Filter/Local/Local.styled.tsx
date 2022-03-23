import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const Region = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    display: inline-block;
    background-color: #fff;
    width: 150px;
    font-size: 20px;
    line-height: 59px;

    border-bottom: ${theme.borders.border0};
    color: ${theme.colors.gray300};
    text-align: center;
    text-decoration: none;
  }
  .selected {
    color: ${theme.colors.orange};
    border-bottom: ${theme.borders.border1};
  }
`;

export const City = css`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Label = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 50px;
  margin: 10px;
  border: ${theme.borders.border0};
  border-radius: ${theme.borders.radius};
`;

export const SelectedLabel = css`
  border: ${theme.borders.border1};
  border-radius: ${theme.borders.radius};
`;
