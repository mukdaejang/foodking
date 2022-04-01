import { createPortal } from 'react-dom';
import { modalBackground, bannerModalOpen } from '../Modal/Modal.styled';

type SetState = {
  setModalOpen: () => void;
  onClick?: () => void;
};

const Background = ({ setModalOpen }: SetState) => {
  return <div css={modalBackground} onClick={setModalOpen}></div>;
};

const BannerBackground = ({ setModalOpen }: SetState) => {
  return <div css={bannerModalOpen} onClick={setModalOpen}></div>;
};

export const Portal = ({ setModalOpen }: SetState) => {
  return createPortal(
    <Background setModalOpen={setModalOpen} />,
    document.getElementById('modal-background') as HTMLElement,
  );
};

export const BannerPortal = ({ setModalOpen }: SetState) => {
  return createPortal(
    <BannerBackground setModalOpen={setModalOpen} />,
    document.getElementById('banner-background') as HTMLElement,
  );
};
