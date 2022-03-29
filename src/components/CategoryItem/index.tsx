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
import { CategoryType } from '@/firebase/type';
import { getImageDocs, getPostImageTitleDocs } from '@/firebase/request';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface CategoryItemChecker {
  categoryData: CategoryType;
  cnt: number;
}

const CategoryItem = ({ categoryData, cnt }: CategoryItemChecker) => {
  const [imageSrc1, setImageSrc1] = useState<string[]>();
  const [imageSrc2, setImageSrc2] = useState<string[]>();
  const [loadState, setLoadState] = useState<boolean>(false);
  const [imgLoadState, setImgLoadState] = useState<boolean[]>([false, false]);

  useEffect(() => {
    getPostImageTitleDocs(categoryData.list.slice(0, 2))
      .then((imgTitle) => {
        getImageDocs(imgTitle[0]).then((res: any) =>
          setImageSrc1([res, imgTitle[0].replace('1.jpeg', '')]),
        );
        getImageDocs(imgTitle[1]).then((res: any) =>
          setImageSrc2([res, imgTitle[1].replace('1.jpeg', '')]),
        );
      })
      .then((res) => {
        setTimeout(() => {
          setLoadState(true);
        }, 1000);
      });
  }, []);

  const changeImgLoadState = () =>
    setImgLoadState(imgLoadState[0] ? [true, true] : [true, false]);

  if (loadState) {
    return (
      <CategoryItemLi cnt={cnt}>
        <CategoryLink
          to={`/bestRestaurants/${categoryData.link}`}
          state={categoryData}
        >
          <figure>
            <CategoryImgBox>
              <img
                src={imageSrc1![0]}
                alt={imageSrc1![1]}
                onLoad={changeImgLoadState}
              />
              <img
                src={imageSrc2![0]}
                alt={imageSrc2![1]}
                onLoad={changeImgLoadState}
              />
              {!imgLoadState[0] && !imgLoadState[1] ? (
                <CategorySkeleton>
                  <Skeleton width={'100%'} height={'100%'} />
                </CategorySkeleton>
              ) : (
                ''
              )}
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
      <CategoryItemLi cnt={cnt}>
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
