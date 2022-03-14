import food from '@/assets/food.jpeg';
import {
  restaurantItem,
  restaurantLink,
  restaurantImg,
  restaurantInfo,
  restaurantName,
  restaurantScore,
  restaurantSubInfo,
} from './restaurant.styled';

const Restaurant = () => {
  return (
    <li css={restaurantItem}>
      <a css={restaurantLink} href="/">
        <figure>
          <img css={restaurantImg} src={`${food}`} alt="food" />
          <figcaption css={restaurantInfo}>
            <p>
              <span css={restaurantName}>음식점 이름</span>
              <span css={restaurantScore}>4.5</span>
            </p>
            <p css={restaurantSubInfo}>{`${'지역'} - ${'음식종류'}`}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

Restaurant.defaultProps = {
  href: '/',
};

export default Restaurant;
