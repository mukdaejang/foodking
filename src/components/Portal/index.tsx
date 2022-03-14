import { FC } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';

const darkTheme = css`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100vw;
  height: 1000vh;
`;
type SetState = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Background = ({ setModalOpen }: SetState) => {
  return <div css={darkTheme}></div>;
};

const Portal = ({ setModalOpen }: SetState) => {
  return createPortal(
    <Background setModalOpen={setModalOpen} />,
    document.getElementById('modal-background') as HTMLElement,
  );
};

export default Portal;
