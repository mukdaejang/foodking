import { createPortal } from 'react-dom';
import { modalBackground } from '../Modal/Modal.styled';

type SetState = {
  setModalOpen: () => void;
  onClick?: () => void;
};

const Background = ({ setModalOpen }: SetState) => {
  return <div css={modalBackground} onClick={setModalOpen}></div>;
};

const Portal = ({ setModalOpen }: SetState) => {
  return createPortal(
    <Background setModalOpen={setModalOpen} />,
    document.getElementById('modal-background') as HTMLElement,
  );
};

export default Portal;
