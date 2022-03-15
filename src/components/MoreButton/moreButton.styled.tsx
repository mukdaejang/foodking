import { css } from '@emotion/react';
import arrow from '@/assets/icons/arrow-down.svg';

const buttonItem = css`
  all: unset;
  display: block;
  padding: 10px;
  margin: 0 auto;
  font-size: 1.4rem;
  color: #ff792a;
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

export { buttonItem };
