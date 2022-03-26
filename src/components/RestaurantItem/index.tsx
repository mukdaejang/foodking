import food from '@/assets/food.jpeg';
import {
  RestaurantItem,
  RestaurantLink,
  RestaurantImg,
  RestaurantInfo,
  RestaurantName,
  RestaurantScore,
  RestaurantSubInfo,
  RestaurantImgBox,
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
    getImageDocs(info.images[0]).then((res: any) => setImageSrc(res));
  }, []);
  return (
    <RestaurantItem>
      <RestaurantLink to="/">
        <figure>
          <RestaurantImgBox>
            <RestaurantImg src={`${imageSrc}`} alt="food" />
          </RestaurantImgBox>
          <RestaurantInfo>
            <p>
              <RestaurantName>{info.name}</RestaurantName>
              <RestaurantScore>{info.score.toFixed(1)}</RestaurantScore>
            </p>
            <RestaurantSubInfo>{`${info.address.district} - ${info.category}`}</RestaurantSubInfo>
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
