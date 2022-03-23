import { Restaurant } from '@/components';
import {
  RestaurantsContent,
  RestaurantsTitle,
  RestaurantsList,
} from './restaurants.styled';
import { getPostDocs } from '@/firebase/request';

interface restaurantChecker {
  title: string;
}

const Restaurants = ({ title }: restaurantChecker) => {
  let restaurants: Array<Object> = [];

  const postData = (async () => {
    await getPostDocs().then((res) => (restaurants = res));
    // console.log(restaurants);
  })();

  console.log(restaurants);
  return (
    <RestaurantsContent>
      <RestaurantsTitle>{`평점이 높은 ${title}`}</RestaurantsTitle>
      <RestaurantsList>
        {}
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
