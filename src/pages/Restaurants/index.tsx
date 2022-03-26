import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

import { css } from '@emotion/react';

import { SurroundPopluars, Reviews, RestaurantInfo } from '@/components';
import Images from './Images';
import image from '@/assets/img/food.jpg';

const imageContainer = css`
  margin: 0 0.4rem;
`;

const Restaurants = () => {
  const dispatch = useAppDispatch();
  const { isOverlayModalOpen } = useAppSelector(({ modal }) => modal);

  useEffect(() => {
    if (isOverlayModalOpen) {
      dispatch(modalActions.handleOverlayModal());
    }
  }, [dispatch, isOverlayModalOpen]);

  const images = Array(5)
    .fill(null)
    .map((_, i) => ({
      id: String(i),
      title: '햄버거',
      src: image,
    }));

  return (
    <div>
      <div css={imageContainer}>
        <Images images={images} size="big" />
      </div>
      <RestaurantInfo />
      <Reviews />
      <SurroundPopluars />
    </div>
  );
};

export default Restaurants;
