import food from '@/assets/food.jpeg';
import { useState, useEffect, useRef } from 'react';
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
import unstar from '@/assets/icons/un-star.svg';
import star from '@/assets/icons/star.svg';
import { IconButton } from '@/components';

const BestRestaurantItem = () => {
  const [starState, setStarState] = useState(false);

  const changeStar = (e: any) => {
    setStarState(!starState);
    (
      e.currentTarget.children[0] as HTMLElement
    ).style.backgroundImage = `url('${!starState ? star : unstar}')`;
  };

  return (
    <RestaurantItemLi>
      <RestaurantItem>
        <RestaurantImg href="/">
          <img src={food} alt="food" />
        </RestaurantImg>
        <RestaurantInfo>
          <a href="/">
            <RestaurantTitle>
              까스까스<RestaurantScore>4.5</RestaurantScore>
            </RestaurantTitle>
          </a>
          {/* <RestaurantLike>
            <button onClick={changeStar} ref={starRef}></button>
            <span>가고싶다</span>
          </RestaurantLike> */}
          <IconButton img={unstar} event={changeStar}></IconButton>
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
          <a href="/">
            <RestaurantMore>{`${`까스까스`} 더보기 >`}</RestaurantMore>
          </a>
        </RestaurantInfo>
      </RestaurantItem>
    </RestaurantItemLi>
  );
};

BestRestaurantItem.defaultProps = {
  href: '/',
};

export default BestRestaurantItem;
