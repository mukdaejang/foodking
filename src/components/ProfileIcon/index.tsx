import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import List from '@/components/ProfileIcon/List';
import SocialLogin from '@/components/Modal/SocialLogin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  ModalContainer,
  isSelected,
  isNotSelected,
} from './ProfileIcon.styled';

import { getPostListDocs, updateStarCount } from '@/firebase/request';
import { PostsWithId } from '@/firebase/type';
import { getAuth, signOut } from 'firebase/auth';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

interface ProfileIconProps {
  onClickToggleModal: () => void;
  isLogin: boolean;
  isMainPage: boolean;
  scroll: number;
}

const ProfileIcon = ({
  onClickToggleModal,
  isLogin,
  isMainPage,
  scroll,
}: ProfileIconProps) => {
  const dispatch = useAppDispatch();
  const { isSocialModalOpen } = useAppSelector(({ modal }) => modal);
  const { isUserLogin } = useAppSelector(({ user }) => user);

  const [isLiFirst, setisLiFirst] = useState(true);
  const [recentlyWatchedPosts, setRecentlyWatchedPosts] = useState<
    PostsWithId[]
  >([]);
  const [favoritePosts, setFavoritePosts] = useState<PostsWithId[]>([]);

  useEffect(() => {
    let watchedArray: any = localStorage.getItem('watched');
    watchedArray = JSON.parse(watchedArray);
    if (watchedArray?.length) {
      getPostListDocs(watchedArray).then((res) => {
        setRecentlyWatchedPosts(res.reverse());
      });
    }

    if (isUserLogin) {
      let favoriteArray: any = localStorage.getItem('favorite');
      favoriteArray = JSON.parse(favoriteArray);
      if (favoriteArray?.length) {
        getPostListDocs(favoriteArray).then((res) => {
          setFavoritePosts(res.reverse());
        });
      }
    }
  }, [isUserLogin]);

  const handleSocialModal = () => {
    window.scrollTo(0, 0);
    dispatch(modalActions.handleSocialModal());
  };

  // const renderFavoritePosts = () => {
  //   let favoriteArray: any = localStorage.getItem('favorite');
  //   favoriteArray = JSON.parse(favoriteArray);
  //   if (favoriteArray?.length) {
  //     getPostListDocs(favoriteArray).then((res) => {
  //       setFavoritePosts(res.reverse());
  //     });
  //   }
  // };

  const favoriteClick = () => {
    if (isUserLogin) {
      setisLiFirst(false);
    } else {
      handleSocialModal();
    }
  };

  const recentlyWatchedClick = () => {
    setisLiFirst(true);
  };

  const deleteOneRecentlyWathced = (postId: string) => {
    let arr = recentlyWatchedPosts;
    arr = arr.filter((item) => item.id !== postId);
    setRecentlyWatchedPosts(arr);
  };

  const deleteOneFavorite = (postId: string) => {
    let arr = favoritePosts;
    arr = arr.filter((item) => item.id !== postId);

    updateStarCount(postId, false);
    setFavoritePosts(arr);
  };

  const deleteBtnClick = () => {
    if (isLiFirst) {
      localStorage.removeItem('watched');
      setRecentlyWatchedPosts([]);
    } else {
      let favoriteArray: any = localStorage.getItem('favorite');
      favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);

      favoriteArray.forEach((postId: string) => {
        updateStarCount(postId, false);
      });

      localStorage.removeItem('favorite');
      setFavoritePosts([]);
    }
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('로그아웃에 성공하였습니다.');
        dispatch(modalActions.handleOverlayModal());
      })
      .catch((error) => {
        alert('로그아웃에 실패하였습니다.');
      });
  };

  return (
    <ModalContainer scroll={scroll} isMainPage={isMainPage}>
      <Modal closePortal={onClickToggleModal}></Modal>
      <div>
        <ul>
          <li
            css={isLiFirst ? isSelected : isNotSelected}
            onClick={recentlyWatchedClick}
          >
            최근 본 맛집
          </li>
          <li
            css={isLiFirst ? isNotSelected : isSelected}
            onClick={favoriteClick}
          >
            가고싶다
          </li>
        </ul>
        <div>
          <div>
            <button onClick={onClickToggleModal}>창 닫기</button>
            <button onClick={deleteBtnClick}>
              <FontAwesomeIcon icon={faXmark} />
              <span>모두 지우기</span>
            </button>
          </div>
          <ul>
            {isLiFirst ? (
              recentlyWatchedPosts.length ? (
                recentlyWatchedPosts.map(
                  (
                    { id, name, address, category, score, star, images },
                    index: number,
                  ) => {
                    return (
                      <List
                        id={id}
                        key={index}
                        name={name}
                        address={address}
                        category={category}
                        score={score}
                        star={star}
                        images={images}
                        isLiFirst={isLiFirst}
                        deleteOnePost={deleteOneRecentlyWathced}
                        deleteOneFavorite={deleteOneFavorite}
                      ></List>
                    );
                  },
                )
              ) : (
                <div>
                  <span> 거기가 어디였지 ?</span>
                  <p> 내가 둘러 본 식당이 이 곳에 순서대로 기록됩니다.</p>
                </div>
              )
            ) : favoritePosts.length ? (
              favoritePosts.map(
                (
                  { id, name, address, category, score, star, images },
                  index,
                ) => {
                  return (
                    <List
                      id={id}
                      key={index}
                      name={name}
                      address={address}
                      category={category}
                      score={score}
                      star={star}
                      images={images}
                      isLiFirst={isLiFirst}
                      deleteOnePost={deleteOneFavorite}
                      deleteOneFavorite={deleteOneFavorite}
                    ></List>
                  );
                },
              )
            ) : (
              <div>
                <span> 격하게 가고싶다 ..</span>
                <p>
                  식당의 '별' 아이콘을 누르면 가고싶은 곳을 쉽게 저장할 수
                  있습니다.
                </p>
              </div>
            )}
          </ul>
        </div>
        <footer>
          {isLiFirst ? (
            isLogin ? (
              <button onClick={logout}>로그아웃</button>
            ) : (
              <button onClick={handleSocialModal}>로그인</button>
            )
          ) : (
            <button>내 정보</button>
          )}

          {isSocialModalOpen && (
            <Modal closePortal={handleSocialModal}>
              <SocialLogin closePortal={handleSocialModal}></SocialLogin>
            </Modal>
          )}
        </footer>
      </div>
    </ModalContainer>
  );
};

export default ProfileIcon;
