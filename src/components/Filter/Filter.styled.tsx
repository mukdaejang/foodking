import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = css`
  width: 500px;
  /* background-color: aqua; */
  margin: 0 auto;
`;

export const Section = css`
  padding: 20px 0;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const SubTitle = styled.h3`
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: 25px;
`;
