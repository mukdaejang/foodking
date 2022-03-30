import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  SurroundPopluars,
  Reviews,
  RestaurantInfo,
  KakaoMap,
} from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { request } from '@/store/restaurants/restaurants-actions';

import Images from './Images';
import { imageContainer } from './Restaurants.styled';
import { mainContent } from '@/pages/Restaurants/Restaurants.styled';

const Restaurants = () => {
  const dispatch = useAppDispatch();
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);

  const { postId = '' } = useParams();

  useEffect(() => {
    dispatch(request({ docName: 'posts', id: postId }));

    let watchedArray: any = localStorage.getItem('watched');

    watchedArray = watchedArray === null ? [] : JSON.parse(watchedArray);
    watchedArray.push(postId);
    watchedArray = new Set(watchedArray);
    watchedArray = [...watchedArray];

    localStorage.setItem('watched', JSON.stringify(watchedArray));
  }, [dispatch, postId]);

  return (
    <div>
      <div css={imageContainer}>
        {post?.images ? <Images images={post?.images} size="big" /> : ''}
      </div>
      <div css={mainContent}>
        <div className="main-content">
          <RestaurantInfo />
        </div>
        <aside>
          <KakaoMap pos={[37.365264512305174, 127.10676860117488]}></KakaoMap>
        </aside>
      </div>
      <Reviews />
      <SurroundPopluars />
    </div>
  );
};

export default Restaurants;
