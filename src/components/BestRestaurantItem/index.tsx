import food from '@/assets/food.jpeg';
import { useState, MouseEvent } from 'react';
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

  return (
    <RestaurantItemLi>
      <RestaurantItem>
        <RestaurantImg to="/">
          <img src={food} alt="food" />
        </RestaurantImg>
        <RestaurantInfo>
          <Link to="/">
            <RestaurantTitle>
              {restaurant.name}
              <RestaurantScore>{restaurant.score.toFixed(1)}</RestaurantScore>
            </RestaurantTitle>
          </Link>
          <IconButton onClick={changeStar} message="가고싶다">
            <Star fill={theme.colors[starState ? 'orange' : 'gray1000']} />
          </IconButton>
          <address>{restaurant.address}</address>
          <RestaurantSubInfo>
            <small>영업시간</small>
            <small>11:30 - 21:00 </small>
          </RestaurantSubInfo>
          <RestaurantSubInfo>
            <small>대표메뉴</small>
            <RestaurantMenu>
              <p>
                <span>로스카츠</span>
                <span>13000 원</span>
              </p>
              <p>
                <span>히레카츠</span>
                <span>14000 원</span>
              </p>
              <p>
                <span>모둠카츠</span>
                <span>17000 원</span>
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
