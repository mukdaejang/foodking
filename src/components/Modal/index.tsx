import { useState } from 'react';
import foodImage from '@/assets/img/food.jpg';
import ModalPortal from './ModalPortal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from './SocialLogin';
import { ModalContainer } from './Modal.styled';

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
      <div>
        <ul>
          <li>최근 본 맛집</li>
          <li>가고싶다</li>
        </ul>
        <div>
          <div>
            <button onClick={onClickToggleModal}>창 닫기</button>
            <button>
              <FontAwesomeIcon icon={faXmark} />
              <span>모두 지우기</span>
            </button>
          </div>
          <ul>
            <li>
              <section>
                <a href="/">
                  <img src={foodImage} alt="food" />
                </a>
                <div>
                  <a href="/">
                    <h3>올레무스</h3>
                    <span>4.4</span>
                  </a>
                  <span>서대문구 - 카페</span>
                </div>
                <button>
                  <FontAwesomeIcon icon={faStar} size="2x" />
                </button>
              </section>
            </li>
          </ul>
        </div>
        <footer>
          <button onClick={handleOpen}>로그인</button>
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
