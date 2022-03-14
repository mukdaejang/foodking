import food from '@/assets/food.jpeg';

import {
  categoryItem,
  categoryLink,
  categoryImg,
  categoryInfo,
  categoryName,
  categoryText,
} from './category_item.styled';

interface CategoryItemChecker {
  categoryData: any;
  // title: string;
  // subTitle: string;
  // restaurants: any;
}
const CategoryItem = ({
  categoryData,
}: // title,
// subTitle,
CategoryItemChecker) => {
  return (
    <li css={categoryItem}>
      <a css={categoryLink} href="/">
        <figure>
          <img css={categoryImg} src={`${food}`} alt="food" />
          <figcaption css={categoryInfo}>
            <p css={categoryName}>{categoryData.title}</p>
            <p css={categoryText}>{categoryData.subTitle}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

export default CategoryItem;
