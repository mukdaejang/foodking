import React, { useState, useCallback } from 'react';
import Modal from './Modal';
import logo from '../logo.svg';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const headerStyle = css`
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 4px 11px rgb(0 0 0 / 10%);
    position: relative;
  `;
  const logoLink = css`
    margin: 0 25px;
  `;
  const logoImage = css`
    width: 100px;
    height: 33px;
    color: hotpink;
  `;
  const headerInput = css`
    height: 27px;
    margin-left: 13px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    &:focus {
      outline: none;
    }
  `;
  const searchDiv = css`
    display: flex;
    align-items: center;
    padding-left: 27px;
    flex-grow: 1;
  `;
  const searchDivNone = css`
    visibility: hidden;
  `;
  const headerUl = css`
    display: flex;
    list-style: none;
    margin-left: auto;
  `;
  const headerLi = css`
    width: 130px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #dbdbdb;
  `;
  const liSpan = css`
    color: gray;
    font-size: 14px;
    font-weight: 700;
  `;
  const liSpanMain = css`
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
  `;
  const headerLink = css`
    text-decoration-line: none;
  `;
  const headerProfile = css`
    height: 100%;
    width: 86px;
    border-left: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
  `;
  const icon = css`
    border: none;
    color: gray;
    background-color: white;
    cursor: pointer;
  `;
  const searchIcon = css`
    width: 25px;
    height: 25px;
    color: gray;
  `;

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isMainPage, setIsMainPage] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <header css={headerStyle}>
        <a href="/" css={logoLink}>
          <img src={logo} alt="먹대장 로고" css={logoImage} />
        </a>
        <div css={isMainPage ? searchDivNone : searchDiv}>
          <FontAwesomeIcon icon={faMagnifyingGlass} css={searchIcon} />
          <input placeholder="지역, 식당 또는 음식" css={headerInput}></input>
        </div>
        <ul css={headerUl}>
          <li css={headerLi}>
            <a href="/" css={headerLink}>
              <span css={isMainPage ? liSpanMain : liSpan}>맛집 리스트</span>
            </a>
          </li>
          <li css={headerLi}>
            <a href="/" css={headerLink}>
              <span css={isMainPage ? liSpanMain : liSpan}>술집 리스트</span>
            </a>
          </li>
        </ul>
        <div css={headerProfile}>
          <button css={icon}>
            <FontAwesomeIcon
              icon={faUser}
              size="2x"
              onClick={onClickToggleModal}
            />
          </button>
        </div>
      </header>
      {isOpenModal && <Modal onClickToggleModal={onClickToggleModal}></Modal>}
    </>
  );
}

export default Header;
