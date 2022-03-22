import styled from '@emotion/styled';

export const StyledLi = styled.li`
  display: flex;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  img {
    width: 6rem;
    height: 8rem;
    margin-right: 1rem;
  }

  div > div {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;

    &:first-of-type {
      font-size: 1.2rem;
    }
  }
`;

export const CategoryTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
`;
