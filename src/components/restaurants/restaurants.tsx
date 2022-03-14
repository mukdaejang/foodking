import './restaurants.css';
import { css } from '@emotion/react';
import { Restaurant } from '@/components';

// const Restaurant = ({ href }) => {

interface restaurantChecker {
  href: string;
  title: string;
}

const Restaurants = ({ href, title }: restaurantChecker) => {
  const restaurantsContent = css`
    padding: 30px 0;
  `;
  const restaurantsTitle = css`
    color: #ff792a;
    font-size: 1.5rem;
    font-weight: 700;
  `;
  const restaurantsList = css`
    display: block;
    overflow: hidden;
  `;

  return (
    <section css={restaurantsContent}>
      <h2 css={restaurantsTitle}>{`${'평점이 높은 맛집'}`}</h2>
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
