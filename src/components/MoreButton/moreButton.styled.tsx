import styled from '@emotion/styled';
import arrow from '@/assets/icons/arrow-down.svg';

const ButtonItem = styled.button`
  all: unset;
  display: block;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;

  &::before {
    content: '';
  }
  &::after {
    content: '';
  }

  &::before,
  &::after {
    padding: 0 16px;
    background: url('${arrow}') no-repeat center center / cover;
  }
`;

export { ButtonItem };
