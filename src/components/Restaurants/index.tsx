import { Restaurant } from '@/components';
import {
  RestaurantsContent,
  RestaurantsTitle,
  RestaurantsList,
} from './restaurants.styled';
import { getTopScorePostDocs } from '@/firebase/request';
import { useState, useRef, useEffect } from 'react';

interface restaurantChecker {
  title: string;
}

export interface infoType {
  id: string;
  address: string;
  category: string;
  name: string;
  score: number;
}

const Restaurants = ({ title }: restaurantChecker) => {
  const [restaurants, setRestaurants] = useState<Array<infoType>>([]);
  const restaurantsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getTopScorePostDocs(8, title).then((res) => setRestaurants(res));
  }, []);

  return (
    <RestaurantsContent>
      <RestaurantsTitle>{`평점이 높은 ${title}`}</RestaurantsTitle>
      <RestaurantsList ref={restaurantsRef}>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} info={restaurant} />
        ))}
      </RestaurantsList>
    </RestaurantsContent>
  );
};

Restaurants.defaultProps = {};

export default Restaurants;
