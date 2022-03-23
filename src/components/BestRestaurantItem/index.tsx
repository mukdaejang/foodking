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

const BestRestaurantItem = () => {
  const [starState, setStarState] = useState(false);

  const changeStar = (e: MouseEvent) => {
    setStarState(!starState);
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
              까스까스<RestaurantScore>4.5</RestaurantScore>
            </RestaurantTitle>
          </Link>
          <IconButton onClick={changeStar} message="가고싶다">
            <Star fill={theme.colors[starState ? 'orange' : 'gray1000']} />
          </IconButton>
          <address>서울특별시 강남구 미왕빌딩</address>
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
            <RestaurantMore>{`${`까스까스`} 더보기 >`}</RestaurantMore>
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
