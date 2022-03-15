import { useState } from 'react';
import foodImage from '@/assets/img/food.jpg';
import ModalPortal from './ModalPortal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from './SocialLogin';
import {
  ModalContainer,
  modalContent,
  modalFooter,
  modalLi,
  modalLink,
  modalListDiv,
  modalListImg,
  modalListUl,
  modalNav,
  modalOpen,
  modalSection,
  modalUl,
  icon,
  iconX,
  listInfo,
  listScore,
  listTitle,
  loginButton,
} from './Modal.styled';

type ModalProps = {
  onClickToggleModal: () => void;
};

const Modal = ({ onClickToggleModal }: ModalProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  const handleOpen = () => {
    setModalOpened(true);
  };
  const handleClose = () => {
    setModalOpened(false);
  };
  const handleBackClose = () => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  return (
    <div css={ModalContainer}>
      <ModalPortal closePortal={handleBackClose}></ModalPortal>
      <div css={modalOpen}>
        <ul css={modalUl}>
          <li css={modalLi}>최근 본 맛집</li>
          <li css={modalLi}>가고싶다</li>
        </ul>
        <div css={modalContent}>
          <div css={modalNav}>
            <button css={icon} onClick={onClickToggleModal}>
              창 닫기
            </button>
            <button css={icon}>
              <FontAwesomeIcon icon={faXmark} css={iconX} />
              <span>모두 지우기</span>
            </button>
          </div>
          <ul css={modalListUl}>
            <li>
              <section css={modalSection}>
                <a href="/">
                  <img src={foodImage} alt="food" css={modalListImg} />
                </a>
                <div css={modalListDiv}>
                  <a href="/" css={modalLink}>
                    <h3 css={listTitle}>올레무스</h3>
                    <span css={listScore}>4.4</span>
                  </a>
                  <span css={listInfo}>서대문구 - 카페</span>
                </div>
                <button css={icon}>
                  <FontAwesomeIcon icon={faStar} size="2x" />
                </button>
              </section>
            </li>
          </ul>
        </div>
        <footer css={modalFooter}>
          <button css={loginButton} onClick={handleOpen}>
            로그인
          </button>
          {modalOpened && (
            <ModalPortal closePortal={handleClose}>
              <SocialLogin closePortal={handleClose}></SocialLogin>
            </ModalPortal>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
