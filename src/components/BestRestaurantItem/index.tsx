import { useState, MouseEvent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  RestaurantItemLi,
  RestaurantItem,
  RestaurantImg,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantScore,
  RestaurantSubInfo,
  RestaurantMenu,
  RestaurantMore,
} from './bestRestaurantItem.styled';

import theme from '@/styles/theme';
import { IconButton } from '@/components';
import { Star } from '@/components/IconButton';
import { BestRestaurantType } from '@/components/BestRestaurants';
import Modal from '@/components/Modal';
import SocialLogin from '@/components/Modal/SocialLogin';

import { getImageDocs } from '@/firebase/request';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

interface BestRestaurantItemType {
  restaurant: BestRestaurantType;
}

const BestRestaurantItem = ({ restaurant }: BestRestaurantItemType) => {
  const dispatch = useAppDispatch();
  const { isSocialModalOpen } = useAppSelector(({ modal }) => modal);
  const { isUserLogin } = useAppSelector(({ user }) => user);

  const [starState, setStarState] = useState(false);
  const [loadState, setLoadState] = useState<boolean>(false);

  const handleSocialModal = () => {
    dispatch(modalActions.handleSocialModal());
  };

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      let favoriteArray: any = localStorage.getItem('favorite');
      if (!starState) {
        favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);
        favoriteArray.push(restaurant.id);
        favoriteArray = new Set(favoriteArray);
      } else {
        favoriteArray = new Set(
          JSON.parse(favoriteArray).filter(
            (item: any) => item !== restaurant.id,
          ),
        );
      }
      favoriteArray = [...favoriteArray];
      localStorage.setItem('favorite', JSON.stringify(favoriteArray));

      setStarState(!starState);
    } else {
      handleSocialModal();
    }
  };

  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    getImageDocs(restaurant.images[0])
      .then((res: any) => setImageSrc(res))
      .then((res) => {
        setTimeout(() => {
          setLoadState(true);
        }, 500);
      });
  }, []);

  if (loadState) {
    return (
      <RestaurantItemLi>
        <RestaurantItem>
          <RestaurantImg to={`/restaurants/${restaurant.id}`}>
            <img src={imageSrc} alt={imageSrc} />
          </RestaurantImg>
          <RestaurantInfo>
            <Link to={`/restaurants/${restaurant.id}`}>
              <RestaurantTitle>
                {restaurant.name}
                <RestaurantScore>{restaurant.score.toFixed(1)}</RestaurantScore>
              </RestaurantTitle>
            </Link>
            <IconButton onClick={changeStar} message="가고싶다">
              <Star fill={theme.colors[starState ? 'orange' : 'gray1000']} />
            </IconButton>
            <address>
              {`${restaurant.address.city} ${restaurant.address.district} ${restaurant.address.detail}`}
            </address>
            <RestaurantSubInfo>
              <small>영업시간</small>
              <small>{restaurant.time} </small>
            </RestaurantSubInfo>
            <RestaurantSubInfo>
              <small>대표메뉴</small>
              <RestaurantMenu>
                <p>
                  <span>{restaurant.menu[0]}</span>
                  <span>{restaurant.menu[1]}</span>
                </p>
                <p>
                  <span>{restaurant.menu[2]}</span>
                  <span>{restaurant.menu[3]}</span>
                </p>
                <p>
                  <span>{restaurant.menu[4]}</span>
                  <span>{restaurant.menu[5]}</span>
                </p>
              </RestaurantMenu>
            </RestaurantSubInfo>
            <Link to="/">
              <RestaurantMore>{`${restaurant.name} 더보기 >`}</RestaurantMore>
            </Link>
          </RestaurantInfo>
          {isSocialModalOpen && (
            <Modal closePortal={handleSocialModal}>
              <SocialLogin closePortal={handleSocialModal}></SocialLogin>
            </Modal>
          )}
        </RestaurantItem>
      </RestaurantItemLi>
    );
  } else {
    return (
      <RestaurantItemLi>
        <RestaurantItem>
          <RestaurantImg to={`/restaurants/${restaurant.id}`}>
            <Skeleton width={'100%'} height={'100%'} />
          </RestaurantImg>
          <RestaurantInfo>
            <Link to={`/restaurants/${restaurant.id}`}>
              <Skeleton width={'60%'} />
            </Link>
            <IconButton onClick={changeStar} message="">
              <Skeleton width={'100%'} height={'100%'} />
            </IconButton>
            <address>
              <Skeleton width={'70%'} height={'100%'} />
            </address>
            <Skeleton width={'100%'} count={5} />
          </RestaurantInfo>
          {isSocialModalOpen && (
            <Modal closePortal={handleSocialModal}>
              <SocialLogin closePortal={handleSocialModal}></SocialLogin>
            </Modal>
          )}
        </RestaurantItem>
      </RestaurantItemLi>
    );
  }
};

BestRestaurantItem.defaultProps = {
  href: '/',
};

export default BestRestaurantItem;
