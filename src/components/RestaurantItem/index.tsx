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
import { infoType } from '@/components/Restaurants';

interface RestaurantType {
  info: infoType;
}

const Restaurant = ({ info }: RestaurantType) => {
  return (
    <RestaurantItem>
      <RestaurantLink to="/">
        <figure>
          <RestaurantImg src={`${food}`} alt="food" />
          <RestaurantInfo>
            <p>
              <RestaurantName>{info.name}</RestaurantName>
              <RestaurantScore>{info.score}</RestaurantScore>
            </p>
            <RestaurantSubInfo>{`${info.address} - ${info.category}`}</RestaurantSubInfo>
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
