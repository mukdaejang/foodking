import food from '@/assets/food.jpeg';
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
} from './bestRestaurantItem.styled';

const BestRestaurantItem = () => {
  const changeStar = (e: any) => {
    console.log(e.target);
  };
  return (
    <figure css={restaurantItem}>
      <img css={restaurantImg} src={food} alt="food" />
      <figcaption css={restaurantInfo}>
        <h3 css={restaurantTitle}>
          까스까스<span css={restaurantScore}>4.5</span>
        </h3>
        <button css={restaurantLike} onClick={changeStar}></button>
        <address>서울특별시 강남구 미왕빌딩</address>
        <p css={restaurantSubInfo}>
          <small>영업시간</small>
          <small>11:30 - 21:00 </small>
        </p>
        <p css={restaurantSubInfo}>
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
        </p>
        <small css={restaurantMore}>{`${`까스까스`} 더보기 >`}</small>
      </figcaption>
    </figure>
  );
};

BestRestaurantItem.defaultProps = {
  href: '/',
};

export default BestRestaurantItem;
