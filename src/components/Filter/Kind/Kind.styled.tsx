import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Kind = css`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const List = styled.li`
  color: ${theme.colors.orange};
`;

export const Label = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  margin: 10px;
  border: ${theme.borders.border0};
  border-radius: 50%;
`;

export const Span = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SelectedLabel = css`
  border: ${theme.borders.border1};
  border-radius: ${theme.borders.radius};
`;

export const Input = css`
  display: none;
`;

export const Img = css`
  width: 60%;
`;
