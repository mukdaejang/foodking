import { Restaurant } from '@/components';
import {
  restaurantsContent,
  restaurantsTitle,
  restaurantsList,
} from './restaurants.styled';

interface restaurantChecker {
  title: string;
}

const Restaurants = ({ title }: restaurantChecker) => {
  return (
    <section css={restaurantsContent}>
      <h2 css={restaurantsTitle}>{`평점이 높은 ${title}`}</h2>
      <ul css={restaurantsList}>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </ul>
    </section>
  );
};

Restaurants.defaultProps = {};

export default Restaurants;
