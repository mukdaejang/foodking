import { FC } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';

const darkTheme = css`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Portal: FC = () => {
  return createPortal(
    <div css={darkTheme}></div>,
    document.getElementById('modal-background') as HTMLElement,
  );
};

export default Portal;
