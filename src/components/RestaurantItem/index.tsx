import food from '@/assets/food.jpeg';
import {
  RestaurantItem,
  RestaurantLink,
  RestaurantImg,
  RestaurantInfo,
  RestaurantName,
  RestaurantScore,
  RestaurantSubInfo,
} from './restaurant.styled';

const Restaurant = () => {
  return (
    <RestaurantItem>
      <RestaurantLink to="/">
        <figure>
          <RestaurantImg src={`${food}`} alt="food" />
          <RestaurantInfo>
            <p>
              <RestaurantName>음식점 이름</RestaurantName>
              <RestaurantScore>4.5</RestaurantScore>
            </p>
            <RestaurantSubInfo>{`${'지역'} - ${'음식종류'}`}</RestaurantSubInfo>
          </RestaurantInfo>
        </figure>
      </RestaurantLink>
    </RestaurantItem>
  );
};

Restaurant.defaultProps = {
  href: '/',
};

export default Restaurant;
