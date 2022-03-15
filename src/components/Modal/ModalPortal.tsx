import { ReactNode, Fragment } from 'react';
import { createPortal } from 'react-dom';
import {
  modalBackground,
  loginModalOpen,
  loginModalBackground,
} from './Modal.styled';
interface ModalProps {
  children?: ReactNode;
  closePortal: () => void;
}

const ModalPortal = ({ children, closePortal }: ModalProps) => {
  const type = typeof children;
  if (type === 'object') {
    return createPortal(
      <Fragment>
        <div css={loginModalOpen}>{children}</div>
        <div css={loginModalBackground} onClick={closePortal}></div>
      </Fragment>,
      document.getElementById('login-modal') as HTMLElement,
    );
  } else {
    return createPortal(
      <Fragment>
        <div css={modalBackground} onClick={closePortal}></div>
      </Fragment>,
      document.getElementById('login-modal') as HTMLElement,
    );
  }
};

export default ModalPortal;
