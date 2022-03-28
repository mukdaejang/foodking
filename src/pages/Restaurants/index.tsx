import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { imageContainer } from './Restaurants.styled';

import { SurroundPopluars, Reviews, RestaurantInfo } from '@/components';
import Images from './Images';
import { mainContent } from '@/pages/Restaurants/Restaurants.styled';
import image from '@/assets/img/food.jpg';

const Restaurants = () => {
  const postId = useParams().postId;

  useEffect(() => {
    let watchedArray: any = localStorage.getItem('watched');

    watchedArray = watchedArray === null ? [] : JSON.parse(watchedArray);
    watchedArray.push(postId);
    watchedArray = new Set(watchedArray);
    watchedArray = [...watchedArray];

    localStorage.setItem('watched', JSON.stringify(watchedArray));
  }, [postId]);

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
      <div css={mainContent}>
        <div className="main-content">
          <RestaurantInfo />
        </div>
        <aside>11</aside>
      </div>
      <Reviews />
      <SurroundPopluars />
    </div>
  );
};

export default Restaurants;
