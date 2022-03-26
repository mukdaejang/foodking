import {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
  CategoryImgBox,
} from './category_item.styled';
import { categoryDataType } from '@/components/Carousel';
import { getImageDocs, getPostTitleDocs } from '@/firebase/request';
import { useState, useEffect } from 'react';

interface CategoryItemChecker {
  categoryData: categoryDataType;
}

const CategoryItem = ({ categoryData }: CategoryItemChecker) => {
  const [imageSrc1, setImageSrc1] = useState<string>();
  const [imageSrc2, setImageSrc2] = useState<string>();

  useEffect(() => {
    getPostTitleDocs(categoryData.list.slice(0, 2)).then((res) => {
      getImageDocs(res[0]).then((res: any) => setImageSrc1(res));
      getImageDocs(res[1]).then((res: any) => setImageSrc2(res));
    });
  }, []);

  return (
    <CategoryItemLi>
      <CategoryLink
        to={`./bestRestaurants/${categoryData.title}`}
        state={categoryData}
      >
        <figure>
          <CategoryImgBox>
            <img src={imageSrc1} alt={imageSrc1} />
            <img src={imageSrc2} alt={imageSrc2} />
          </CategoryImgBox>
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
