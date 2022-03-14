import { FC } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';

const darkTheme = css`
  background-color: black;
  width: 100vw;
  height: 100vh;
  z-index: 900;
`;

const Portal: FC = () => {
  return createPortal(
    <div css={darkTheme}></div>,
    document.getElementById('wrapper') as HTMLElement,
  );
};

export default Portal;
