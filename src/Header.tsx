import React from 'react';
import logo from './logo.svg';
import foodImage from './food.jpg';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUser,
  faXmark,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

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
    font-size: 16px;
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
  const headerUl = css`
    display: flex;
    list-style: none;
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
    font-size: 16px;
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
  `;
  const searchIcon = css`
    width: 25px;
    height: 25px;
    color: gray;
  `;

  const modal = css`
    /* display: none; */
    position: absolute;
    right: 20px;
    top: 70px;
    width: 320px;
    height: 534px;
    border: 1px solid black;
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
    margin: 0;
  `;
  const modalLi = css`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const modalContent = css`
    height: 413px;
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
  const clearDiv = css`
    display: flex;
    justify-content: space-between;
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
  return (
    <header css={headerStyle}>
      <a href="/" css={logoLink}>
        <img src={logo} alt="먹대장 로고" css={logoImage} />
      </a>
      <div css={searchDiv}>
        <FontAwesomeIcon icon={faMagnifyingGlass} css={searchIcon} />
        <input placeholder="지역, 식당 또는 음식" css={headerInput}></input>
      </div>
      <ul css={headerUl}>
        <li css={headerLi}>
          <a href="/" css={headerLink}>
            <span css={liSpan}>맛집 리스트</span>
          </a>
        </li>
        <li css={headerLi}>
          <a href="/" css={headerLink}>
            <span css={liSpan}>술집 리스트</span>
          </a>
        </li>
      </ul>
      <div css={headerProfile}>
        <button css={icon}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </button>
      </div>
      <div css={modal}>
        <ul css={modalUl}>
          <li css={modalLi}>최근 본 맛집</li>
          <li css={modalLi}>가고싶다</li>
        </ul>
        <div css={modalContent}>
          <div css={clearDiv}>
            <button css={icon}>창 닫기</button>
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
    </header>
  );
}

export default Header;
