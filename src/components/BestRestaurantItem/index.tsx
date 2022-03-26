import { useState, MouseEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

import { IconButton } from '@/components';
import { Star } from '@/components/IconButton';
import theme from '@/styles/theme';
import { BestRestaurantType } from '@/components/BestRestaurants';
import { useAppSelector } from '@/store/hooks';
import { getImageDocs } from '@/firebase/request';

interface BestRestaurantItemType {
  restaurant: BestRestaurantType;
}

const BestRestaurantItem = ({ restaurant }: BestRestaurantItemType) => {
  const { isUserLogin } = useAppSelector(({ user }) => user);
  const [starState, setStarState] = useState(false);

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      setStarState(!starState);
    } else {
      alert('로그인한 사용자만 사용할 수 있는 기능입니다.');
    }
  };

  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    getImageDocs(restaurant.images[0]).then((res: any) => setImageSrc(res));
  }, []);

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
      </RestaurantItem>
    </RestaurantItemLi>
  );
};

BestRestaurantItem.defaultProps = {
  href: '/',
};

export default BestRestaurantItem;
