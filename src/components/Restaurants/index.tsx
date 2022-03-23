import { Restaurant } from '@/components';
import {
  RestaurantsContent,
  RestaurantsTitle,
  RestaurantsList,
} from './restaurants.styled';
import { getPostDocs } from '@/firebase/request';
import { useState, useRef, useEffect } from 'react';

interface restaurantChecker {
  title: string;
}
export interface infoType {
  address: string;
  category: string;
  name: string;
  score: number;
}

const Restaurants = ({ title }: restaurantChecker) => {
  const [restaurants, setRestaurants] = useState<Array<infoType>>([]);
  const restaurantsRef = useRef<HTMLUListElement>(null);

  // const postData = async () => {
  //   await getPostDocs().then((res) => setRestaurants([...res]));
  //   console.log(restaurants);
  // };

  useEffect(() => {
    getPostDocs().then((res) => setRestaurants([...res]));
  }, []);

  // console.log(restaurants);
  return (
    <RestaurantsContent>
      <RestaurantsTitle>{`평점이 높은 ${title}`}</RestaurantsTitle>
      <RestaurantsList ref={restaurantsRef}>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.name} info={restaurant} />
        ))}
      </RestaurantsList>
    </RestaurantsContent>
  );
};

Restaurants.defaultProps = {};

export default Restaurants;
