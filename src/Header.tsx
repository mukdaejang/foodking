import React from 'react';
import logo from './logo1.svg';
import { css } from '@emotion/react';

function Header() {
  const headerStyle = css`
    height: 60px;
  `;
  const style = css`
    width: 100px;
    height: 100px;
    color: hotpink;
  `;

  return (
    <header css={headerStyle}>
      <a href="/">
        <img src={logo} alt="먹대장 로고" css={style} />
      </a>
    </header>
  );
}

export default Header;
