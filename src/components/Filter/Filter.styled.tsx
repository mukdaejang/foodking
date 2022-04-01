import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Container = css`
  width: 500px;
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

export const ButtonContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-size: 30px;
  button {
    width: 60%;
    height: 60px;
    margin: 0 auto;
    color: white;
    background: ${theme.colors.orange};
    border-radius: ${theme.borders.radius};
  }
`;
