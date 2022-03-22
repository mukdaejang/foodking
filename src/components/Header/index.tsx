import { useState, useCallback, Fragment, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProfileIcon from '@/components/ProfileIcon';
import logo from '@/assets/img/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  headerLink,
  searchIcon,
  blankDiv,
  StyledHeader,
  HeaderInput,
} from './Header.styled';

import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isOverlayModalOpen } = useAppSelector(({ modal }) => modal);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isMainPage, setIsMainPage] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  const onClickToggleModal = useCallback(() => {
    dispatch(modalActions.handleOverlayModal());
  }, [dispatch]);

  const { pathname } = useLocation();
  console.log(pathname);
  console.log(isLogin);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setProfileImage(user?.providerData[0].photoURL);
      setIsLogin(true);
    } else {
      // console.log('no user');
      setIsLogin(false);
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
            <a href="/">
              <img src={logo} alt="먹대장 로고" />
            </a>
            <HeaderInput isMain={isMainPage}>
              <FontAwesomeIcon icon={faMagnifyingGlass} css={searchIcon} />
              <input placeholder="지역, 식당 또는 음식"></input>
            </HeaderInput>
            <ul>
              <li>
                <Link to="/matjib_list" css={headerLink}>
                  <span>맛집 리스트</span>
                </Link>
              </li>
              <li>
                <Link to="/" css={headerLink}>
                  <span>술집 리스트</span>
                </Link>
              </li>
            </ul>
            <div>
              {isLogin ? (
                <button className="profileImgBtn" onClick={onClickToggleModal}>
                  <img src={profileImage!} alt="프로필이미지"></img>
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
          isLogin={isLogin}
        ></ProfileIcon>
      )}
    </Fragment>
  );
};

export default Header;
