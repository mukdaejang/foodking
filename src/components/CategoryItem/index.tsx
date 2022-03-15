import food from '@/assets/food.jpeg';
import {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
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
    <CategoryItemLi>
      <CategoryLink href="/">
        <figure>
          <CategoryImg src={`${food}`} alt="food" />
          <CategoryInfo>
            <CategoryTitle>{categoryData.title}</CategoryTitle>
            <CategoryText>{categoryData.subTitle}</CategoryText>
          </CategoryInfo>
        </figure>
      </CategoryLink>
    </CategoryItemLi>
  );
};

export default CategoryItem;
