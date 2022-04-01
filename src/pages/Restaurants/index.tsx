import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LocalPopluars, Reviews, RestaurantInfo, KakaoMap } from '@/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { request } from '@/store/restaurants/restaurants-actions';

import Images from './Images';
import { imageContainer } from './Restaurants.styled';
import { mainContent } from '@/pages/Restaurants/Restaurants.styled';

import { updatePostViews } from '@/firebase/request';

import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

const Restaurants = () => {
  const dispatch = useAppDispatch();
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);

  const { postId = '' } = useParams();

  useEffect(() => {
    dispatch(request({ docName: 'posts', id: postId }));

    updatePostViews(postId);

    let watchedArray: any = localStorage.getItem('watched');

    watchedArray = watchedArray === null ? [] : JSON.parse(watchedArray);
    watchedArray.push(postId);
    watchedArray = new Set(watchedArray);
    watchedArray = [...watchedArray];

    localStorage.setItem('watched', JSON.stringify(watchedArray));
  }, [dispatch, postId]);

  return (
    <div>
      <Helmet>
        <title>{setDocumentTitle(post?.name ?? '')}</title>
      </Helmet>
      <div css={imageContainer}>
        {post?.images ? <Images images={post?.images} size="big" /> : ''}
      </div>
      <div css={mainContent}>
        <div className="main-content">
          <RestaurantInfo />
          <Reviews />
        </div>
        <aside>
          <KakaoMap pos={[37.365264512305174, 127.10676860117488]}></KakaoMap>
          <LocalPopluars />
        </aside>
      </div>
    </div>
  );
};

export default Restaurants;
