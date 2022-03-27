import { useState, useEffect, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import Modal from '@/components/Modal';
import SocialLogin from '@/components/Modal/SocialLogin';
import { Star } from '@/components/IconButton';

import theme from '@/styles/theme';
import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

export interface ListProps {
  id: string;
  name: string;
  address: string;
  category: string;
  score: number;
  isLiFirst: boolean;
  deleteOnePost: (arg0: string) => void;
}

const List = ({
  id,
  name,
  address,
  category,
  score,
  isLiFirst,
  deleteOnePost,
}: ListProps) => {
  const dispatch = useAppDispatch();
  const { isUserLogin } = useAppSelector(({ user }) => user);
  const { isSocialModalOpen } = useAppSelector(({ modal }) => modal);

  const [starState, setStarState] = useState(isLiFirst ? false : true);

  const handleSocialModal = () => {
    dispatch(modalActions.handleSocialModal());
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
        <Link to={`/restaurants/${id}`}>
          <img src={foodImage} alt="food" />
        </Link>
        <div>
          <Link to={`/restaurants/${id}`}>
            <h3>{name}</h3>
            <span>{score}</span>
          </Link>
          <span>{`${category}`}</span>
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
