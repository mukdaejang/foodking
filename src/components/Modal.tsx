import React, { PropsWithChildren } from 'react';
import foodImage from '../food.jpg';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';

type ModalProps = {
  onClickToggleModal: () => void;
};

function Modal({ onClickToggleModal }: ModalProps) {
  const icon = css`
    border: none;
    color: gray;
    background-color: white;
    cursor: pointer;
    display: flex;
  `;

  const ModalContainer = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const modalOpen = css`
    position: absolute;
    right: 20px;
    top: 70px;
    width: 320px;
    height: 534px;

    box-sizing: border-box;
    background-color: white;
    z-index: 10000;
  `;
  const modalUl = css`
    display: flex;
    list-style: none;
    height: 50px;
  `;
  const modalListUl = css`
    list-style: none;
    width: 294px;
    height: 86px;
    margin-top: 16px;
    margin-right: 10px;
    box-sizing: border-box;
  `;
  const modalLi = css`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    cursor: pointer;
  `;
  const modalContent = css`
    height: 413px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  `;
  const modalListImg = css`
    width: 70px;
    height: 70px;
    margin-right: 16px;
    margin-left: 16px;
  `;
  const modalSection = css`
    display: flex;
    width: 320px;
  `;

  const modalListDiv = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `;
  const modalNav = css`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-left: 16px;
    margin-right: 16px;
  `;
  const modalLink = css`
    display: flex;
    text-decoration: none;
  `;
  const listTitle = css`
    line-height: 22px;
    font-size: 16px;
    color: black;
  `;
  const listScore = css`
    line-height: 22px;
    margin-left: 5px;
    font-size: 16px;
    color: #ff792a;
  `;
  const listInfo = css`
    font-size: 12px;
    margin-top: 5px;
  `;

  const modalFooter = css`
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    padding: 10px 16px;
  `;

  const loginButton = css`
    width: 100%;
    height: 50px;
    border: 2px solid #ff792a;
    border-radius: 50px;
    font-size: 16px;
    color: #ff7100;
    background-color: transparent;
  `;

  const modalBackground = css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.2);
  `;

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
          <button css={loginButton}>로그인</button>
        </footer>
      </div>
      <div
        css={modalBackground}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </div>
  );
}

export default Modal;
