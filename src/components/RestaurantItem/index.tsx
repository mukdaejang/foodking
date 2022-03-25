import food from '@/assets/food.jpeg';
import {
  RestaurantItem,
  RestaurantLink,
  RestaurantImg,
  RestaurantInfo,
  RestaurantName,
  RestaurantScore,
  RestaurantSubInfo,
} from './restaurant.styled';
import { infoType } from '@/components/Restaurants';
import { useState, useEffect } from 'react';
import { getImageDocs } from '@/firebase/request';

interface RestaurantType {
  info: infoType;
}

const Restaurant = ({ info }: RestaurantType) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    getImageDocs('스크린샷 2022-03-21 오후 8.43.28.png').then(
      (res: any) => setImageSrc(res),
    );
  }, []);
  return (
    <RestaurantItem>
      <RestaurantLink to="/">
        <figure>
          <RestaurantImg src={`${imageSrc}`} alt="food" />
          <RestaurantInfo>
            <p>
              <RestaurantName>{info.name}</RestaurantName>
              <RestaurantScore>{info.score}</RestaurantScore>
            </p>
            <RestaurantSubInfo>{`${info.address} - ${info.category}`}</RestaurantSubInfo>
          </RestaurantInfo>
        </figure>
      </RestaurantLink>
    </RestaurantItem>
  );
};

Restaurant.defaultProps = {
  href: '/',
};

export default Restaurant;
