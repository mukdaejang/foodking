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
  // setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: (isOpen: boolean) => void;
  onClick?: () => void;
};

const Background = ({ setModalOpen }: SetState) => {
  const onClick = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  return <div css={darkTheme} onClick={onClick}></div>;
};

const Portal = ({ setModalOpen }: SetState) => {
  return createPortal(
    <Background setModalOpen={setModalOpen} />,
    document.getElementById('modal-background') as HTMLElement,
  );
};

export default Portal;
