import { FC, MouseEvent } from 'react';
import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { loginGoogle, loginFacebook } from '@/firebase';
import {
  ModalContainer,
  modalBackground,
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
  listInfo,
  listScore,
  listTitle,
  loginButton,
} from './Modal.styled';

type ModalProps = {
  onClickToggleModal: () => void;
};

const Modal: FC<ModalProps> = ({ onClickToggleModal }) => {
  const googleLogin = () => {
    loginGoogle().then((result) => {
      console.log(result);
    });
  };
  const facebookLogin = () => {
    loginFacebook().then((result) => {
      console.log(result);
    });
  };
  return (
    <div css={ModalContainer}>
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
              <FontAwesomeIcon icon={faXmark} />
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
          <button css={loginButton} onClick={facebookLogin}>
            로그인
          </button>
        </footer>
      </div>
      <div
        css={modalBackground}
        onClick={(e: MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </div>
  );
};

export default Modal;
