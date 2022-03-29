import { useState, useCallback, Fragment, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileIcon from '@/components/ProfileIcon';
import Portal from '@/components/Portal';
import logo from '@/assets/img/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  searchIcon,
  blankDiv,
  StyledHeader,
  HeaderInput,
} from './Header.styled';

import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';
import { userActions } from '@/store/user/user-slice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isOverlayModalOpen, isSearchBackModalOpen } = useAppSelector(
    ({ modal }) => modal,
  );
  const { isUserLogin, userProfileImage } = useAppSelector(({ user }) => user);

  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isMainPage, setIsMainPage] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const onClickToggleSearchBackModal = useCallback(() => {
    dispatch(modalActions.handleSearchBackModal());
  }, [dispatch]);
  const onClickToggleModal = useCallback(() => {
    dispatch(modalActions.handleOverlayModal());
  }, [dispatch]);

  const { pathname } = useLocation();

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(userActions.setUserProfileImage(user?.providerData[0].photoURL));
      dispatch(userActions.handleUserLogin(true));
    } else {
      dispatch(userActions.handleUserLogin(false));
    }
  });

  useEffect(() => {
    setShowHeader(!(pathname === '/page-not-found'));
    pathname === '/' ? setIsMainPage(true) : setIsMainPage(false);
  }, [pathname]);

  return (
    <Fragment>
      {showHeader && (
        <Fragment>
          <StyledHeader
            isScroll={scrollPosition > 200 ? true : false}
            isMain={isMainPage}
          >
            <Link to="/">
              <img src={logo} alt="먹대장 로고" />
            </Link>
            <HeaderInput isMain={isMainPage}>
              <FontAwesomeIcon icon={faMagnifyingGlass} css={searchIcon} />
              <input
                placeholder="지역, 식당 또는 음식"
                onClick={onClickToggleSearchBackModal}
              ></input>

              {isSearchBackModalOpen && (
                <Portal setModalOpen={onClickToggleSearchBackModal}></Portal>
              )}
            </HeaderInput>
            <ul>
              <li>
                <Link to="/food_list">
                  <span>맛집 리스트</span>
                </Link>
              </li>
              <li>
                <Link to="/drink_list">
                  <span>술집 리스트</span>
                </Link>
              </li>
            </ul>
            <div>
              {isUserLogin ? (
                <button className="profileImgBtn" onClick={onClickToggleModal}>
                  <img src={userProfileImage!} alt="프로필이미지"></img>
                </button>
              ) : (
                <button>
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2x"
                    onClick={onClickToggleModal}
                  />
                </button>
              )}
            </div>
          </StyledHeader>
          {isMainPage ? '' : <div css={blankDiv}></div>}
        </Fragment>
      )}
      {isOverlayModalOpen && (
        <ProfileIcon
          onClickToggleModal={onClickToggleModal}
          isLogin={isUserLogin}
          isMainPage={isMainPage}
          scroll={scrollPosition}
        ></ProfileIcon>
      )}
    </Fragment>
  );
};

export default Header;
