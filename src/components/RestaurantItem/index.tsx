import {
  RestaurantItem,
  RestaurantLink,
  RestaurantImg,
  RestaurantInfo,
  RestaurantName,
  RestaurantScore,
  RestaurantSubInfo,
  RestaurantImgBox,
  RestaurantSkeleton,
} from './restaurant.styled';
import { useState, useEffect } from 'react';
import { getImageDocs } from '@/firebase/request';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { PostsWithId } from '@/firebase/type';

interface RestaurantType {
  info?: PostsWithId;
  cnt: number;
}

const Restaurant = ({ info, cnt }: RestaurantType) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loadState, setLoadState] = useState<boolean>(false);
  const [imgLoadState, setImgLoadState] = useState<boolean>(false);

  useEffect(() => {
    if (info) {
      getImageDocs(info?.images![0] as any, 'restaurants')
        .then((res: any) => setImageSrc(res))
        .then((res) => {
          setTimeout(() => {
            setLoadState(true);
          }, 1000);
        });
    }
  }, []);

  const changeImgLoadState = () => setImgLoadState(true);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (loadState && info) {
    return (
      <RestaurantItem cnt={cnt}>
        <RestaurantLink to={`/restaurants/${info?.id}`} onClick={scrollToTop}>
          <figure>
            <RestaurantImgBox>
              <RestaurantImg
                src={`${imageSrc}`}
                alt="food"
                onLoad={changeImgLoadState}
              />
              {!imgLoadState ? (
                <RestaurantSkeleton>
                  <Skeleton width={'100%'} height={'100%'} />
                </RestaurantSkeleton>
              ) : (
                ''
              )}
            </RestaurantImgBox>
            <RestaurantInfo>
              <p>
                <RestaurantName>{info?.name}</RestaurantName>
                <RestaurantScore>{info?.score.toFixed(1)}</RestaurantScore>
              </p>
              <RestaurantSubInfo>{`${info?.address.district} - ${info?.category}`}</RestaurantSubInfo>
            </RestaurantInfo>
          </figure>
        </RestaurantLink>
      </RestaurantItem>
    );
  } else {
    return (
      <RestaurantItem cnt={cnt}>
        <RestaurantLink to="/" onClick={scrollToTop}>
          <figure>
            <RestaurantImgBox>
              <RestaurantSkeleton>
                <Skeleton width={'100%'} height={'100%'} />
              </RestaurantSkeleton>
            </RestaurantImgBox>
            <RestaurantInfo>
              <p>
                <Skeleton width={'70%'} />
              </p>
              <RestaurantSubInfo>
                <Skeleton width={'40%'} />
              </RestaurantSubInfo>
            </RestaurantInfo>
          </figure>
        </RestaurantLink>
      </RestaurantItem>
    );
  }
};

Restaurant.defaultProps = {
  href: '/',
};

export default Restaurant;
