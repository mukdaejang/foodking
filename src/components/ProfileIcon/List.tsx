import { useState, useEffect, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import Modal from '@/components/Modal';
import SocialLogin from '@/components/Modal/SocialLogin';
import { Star } from '@/components/IconButton';

import theme from '@/styles/theme';
import { imgSkeleton } from '@/components/ProfileIcon/ProfileIcon.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { PostsWithId } from '@/firebase/type';
import { getImageDocs } from '@/firebase/request';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface ListProps extends PostsWithId {
  isLiFirst: boolean;
  deleteOnePost: (arg0: string) => void;
}

const List = ({
  id,
  name,
  address,
  category,
  score,
  images,
  isLiFirst,
  deleteOnePost,
}: ListProps) => {
  const dispatch = useAppDispatch();
  const { isUserLogin } = useAppSelector(({ user }) => user);
  const { isSocialModalOpen } = useAppSelector(({ modal }) => modal);

  const [starState, setStarState] = useState<boolean>(isLiFirst ? false : true);
  const [isLoadingFinish, setIsLoadingFinish] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    getImageDocs(images![0] as any)
      .then((res: any) => setImageSrc(res))
      .then((res) => {
        setTimeout(() => {
          setIsLoadingFinish(true);
        }, 600);
      });
  }, []);

  const handleSocialModal = () => {
    dispatch(modalActions.handleSocialModal());
  };
  const handleOverlayModal = () => {
    dispatch(modalActions.handleOverlayModal());
  };

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      let favoriteArray: any = localStorage.getItem('favorite');
      if (!starState) {
        favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);
        favoriteArray.push(id);
        favoriteArray = new Set(favoriteArray);
      } else {
        favoriteArray = new Set(
          JSON.parse(favoriteArray).filter((item: any) => item !== id),
        );
      }
      favoriteArray = [...favoriteArray];
      localStorage.setItem('favorite', JSON.stringify(favoriteArray));

      setStarState(!starState);
    } else {
      handleSocialModal();
    }
  };

  const setLocalStorage = (isLiFirst: boolean) => {
    const storageName = isLiFirst ? 'watched' : 'favorite';
    let arr: any = localStorage.getItem(storageName);
    arr = JSON.parse(arr);
    const newArr = arr.filter((item: string) => item !== id);
    localStorage.setItem(storageName, JSON.stringify(newArr));
  };

  const deleteRecentPosts = () => {
    setLocalStorage(isLiFirst);
  };

  return (
    <li>
      <section>
        <Link to={`/restaurants/${id}`} onClick={handleOverlayModal}>
          {isLoadingFinish ? (
            <img src={imageSrc} alt="food" />
          ) : (
            <Skeleton css={imgSkeleton} />
          )}
        </Link>
        <div>
          <Link to={`/restaurants/${id}`} onClick={handleOverlayModal}>
            <h3>{name}</h3>
            <span>{score}</span>
          </Link>
          <span>{`${address.district} - ${category}`}</span>
        </div>
        {isLiFirst ? (
          <button>
            <Star
              fill={theme.colors[starState ? 'orange' : 'gray1000']}
              onClick={changeStar}
            />

            <FontAwesomeIcon
              className="xIcon"
              icon={faXmark}
              onClick={() => {
                deleteRecentPosts();
                deleteOnePost(id);
              }}
            />
          </button>
        ) : (
          <button>
            <Star
              fill={theme.colors['orange']}
              onClick={(e) => {
                changeStar(e);
                deleteOnePost(id);
              }}
            />
          </button>
        )}
      </section>
      {isSocialModalOpen && (
        <Modal closePortal={handleSocialModal}>
          <SocialLogin closePortal={handleSocialModal}></SocialLogin>
        </Modal>
      )}
    </li>
  );
};

export default List;
