import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    span:last-of-type {
      color: ${({ theme }) => theme.colors.gray100};
    }
  }

  ul {
    display: flex;

    li {
      color: ${({ theme }) => theme.colors.gray300};

      &:first-of-type {
        color: ${({ theme }) => theme.colors.orange};

        &:before {
          content: '';
        }
      }
      &:before {
        content: '| ';
        margin-left: 0.5rem;
      }
    }
  }
`;

export const StyledReview = styled.li`
  display: flex;
  margin-top: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

export const profileStyle = css`
  text-align: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  span {
    display: inline-block;
    width: 5rem;
    font-size: 0.8rem;
  }
`;

export const contentStyle = css`
  margin: 0 2rem;

  p {
    margin: 0.4rem 0 2rem;
  }

  ul {
    display: flex;

    li::after {
      content: '';
      margin-right: 0.8rem;
    }
  }

  button {
    width: 8rem;
    height: 8rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const GrayTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray400};
`;

export const Evaluation = styled.div`
  text-align: center;
  margin-left: auto;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  span {
    display: block;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;
