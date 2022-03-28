import {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
  CategoryImgBox,
  CategorySkeleton,
} from './category_item.styled';
import { categoryDataType } from '@/components/Carousel';
import { getImageDocs, getPostImageTitleDocs } from '@/firebase/request';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface CategoryItemChecker {
  categoryData: categoryDataType;
}

const CategoryItem = ({ categoryData }: CategoryItemChecker) => {
  const [imageSrc1, setImageSrc1] = useState<string>();
  const [imageSrc2, setImageSrc2] = useState<string>();
  const [loadState, setLoadState] = useState<boolean>(false);

  useEffect(() => {
    getPostImageTitleDocs(categoryData.list.slice(0, 2))
      .then((res) => {
        getImageDocs(res[0]).then((res: any) => setImageSrc1(res));
        getImageDocs(res[1]).then((res: any) => setImageSrc2(res));
      })
      .then((res) => {
        setTimeout(() => {
          setLoadState(true);
        }, 1000);
      });
  }, []);

  if (loadState) {
    return (
      <CategoryItemLi>
        <CategoryLink
          to={`./bestRestaurants/${categoryData.link}`}
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
  } else {
    return (
      <CategoryItemLi>
        <figure>
          <CategoryImgBox>
            <CategorySkeleton>
              <Skeleton width={'100%'} height={'100%'} />
            </CategorySkeleton>
          </CategoryImgBox>
        </figure>
      </CategoryItemLi>
    );
  }
};

export default CategoryItem;
