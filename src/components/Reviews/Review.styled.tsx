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
  margin-top: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};
`;

export const FlexBox = styled.div`
  display: flex;
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
    overflow-wrap: break-word;
  }
`;

export const contentStyle = css`
  margin: 0 2rem;

  p {
    margin: 0.4rem 0 2rem;
    line-height: 1.2rem;
  }
`;

export const GrayTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray400};
`;

export const Evaluation = styled.div`
  text-align: center;
  margin-left: auto;

  i {
    display: block;
    margin: 0 auto;
  }

  span {
    display: block;
    width: 3rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const ReviewControlBox = styled.div`
  margin: 1.5rem 0;

  overflow: hidden;
  & > button {
    float: right;
    margin-left: 1rem;
    padding: 8px;
    font-size: 0.9rem;
    box-sizing: border-box;
    width: 120px;
    border-radius: 20px;
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.gray900};
    border: 1px solid transparent;

    &:hover {
      background-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
