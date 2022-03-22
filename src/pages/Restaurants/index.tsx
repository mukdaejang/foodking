import { css } from '@emotion/react';

import { SurroundPopluars, Reviews, RestaurantInfo } from '@/components';
import Images from './Images';
import image from '@/assets/img/food.jpg';

const imageContainer = css`
  margin: 0 0.4rem;
`;

const Restaurants = () => {
  const images = Array(5)
    .fill(null)
    .map((_, i) => ({
      id: String(i),
      title: '햄버거',
      src: image,
    }));

  return (
    <div>
      {/* <div css={imageContainer}>
        <Images images={images} size="big" />
      </div> */}
      <SurroundPopluars />
      <Reviews />
      <RestaurantInfo />
    </div>
  );
};

export default Restaurants;
