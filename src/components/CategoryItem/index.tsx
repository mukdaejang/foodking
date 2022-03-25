import food from '@/assets/food.jpeg';
import {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
} from './category_item.styled';
import { categoryDataType } from '@/components/Carousel';
import { getImageDocs } from '@/firebase/request';
import { useState, useEffect } from 'react';

interface CategoryItemChecker {
  categoryData: categoryDataType;
}

const CategoryItem = ({ categoryData }: CategoryItemChecker) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    getImageDocs('스크린샷 2022-03-21 오후 8.43.28.png').then(
      (res: any) => setImageSrc(res),
    );
  }, []);

  return (
    <CategoryItemLi>
      <CategoryLink
        to={`./bestRestaurants/${categoryData.title}`}
        state={categoryData}
      >
        <figure>
          <CategoryImg src={`${imageSrc}`} alt="food" />
          <CategoryInfo>
            <CategoryTitle>{categoryData.title}</CategoryTitle>
            <CategoryText>{categoryData.description}</CategoryText>
          </CategoryInfo>
        </figure>
      </CategoryLink>
    </CategoryItemLi>
  );
};

export default CategoryItem;
