import { FC, useState, useCallback, Fragment } from 'react';
import Modal from '@/components/Modal';
import logo from '@/assets/img/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  headerInput,
  headerLi,
  headerLink,
  headerProfile,
  headerStyle,
  headerUl,
  liSpan,
  liSpanMain,
  logoImage,
  logoLink,
  searchDiv,
  searchDivNone,
  searchIcon,
  icon,
} from './Header.styled';

const Header: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isMainPage, setIsMainPage] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Header;
