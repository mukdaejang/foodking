import food from '@/assets/food.jpeg';
import { useState, useEffect, useRef } from 'react';
import {
  restaurantItem,
  restaurantImg,
  restaurantInfo,
  restaurantTitle,
  restaurantScore,
  restaurantSubInfo,
  restaurantMenu,
  restaurantMore,
  restaurantLike,
  restaurantItemLi,
} from './bestRestaurantItem.styled';
import unstar from '@/assets/icons/un-star.svg';
import star from '@/assets/icons/star.svg';

const BestRestaurantItem = () => {
  const [starState, setStarState] = useState(false);
  const starRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (starRef.current) {
      starRef.current.style.backgroundImage = `url('${
        starState ? star : unstar
      }')`;
    }
  }, [starState]);

  const changeStar = () => setStarState(!starState);

  return (
    <li css={restaurantItemLi}>
      <figure css={restaurantItem}>
        <a href="/" css={restaurantImg}>
          <img src={food} alt="food" />
        </a>
        <figcaption css={restaurantInfo}>
          <a href="/">
            <h3 css={restaurantTitle}>
              까스까스<span css={restaurantScore}>4.5</span>
            </h3>
          </a>
          <div css={restaurantLike}>
            <button onClick={changeStar} ref={starRef}></button>
            <span>가고싶다</span>
          </div>
          <address>서울특별시 강남구 미왕빌딩</address>
          <p css={restaurantSubInfo}>
            <small>영업시간</small>
            <small>11:30 - 21:00 </small>
          </p>
          <div css={restaurantSubInfo}>
            <small>대표메뉴</small>
            <small css={restaurantMenu}>
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
            </small>
          </div>
          <a href="/">
            <small css={restaurantMore}>{`${`까스까스`} 더보기 >`}</small>
          </a>
        </figcaption>
      </figure>
    </li>
  );
};

BestRestaurantItem.defaultProps = {
  href: '/',
};

export default BestRestaurantItem;
