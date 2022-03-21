import { Restaurant } from '@/components';
import {
  RestaurantsContent,
  RestaurantsTitle,
  RestaurantsList,
} from './restaurants.styled';

interface restaurantChecker {
  title: string;
}

const Restaurants = ({ title }: restaurantChecker) => {
  return (
    <RestaurantsContent>
      <RestaurantsTitle>{`평점이 높은 ${title}`}</RestaurantsTitle>
      <RestaurantsList>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </RestaurantsList>
    </RestaurantsContent>
  );
};

Restaurants.defaultProps = {};

export default Restaurants;
