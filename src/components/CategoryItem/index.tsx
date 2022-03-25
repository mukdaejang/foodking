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

interface CategoryItemChecker {
  categoryData: categoryDataType;
}

const CategoryItem = ({ categoryData }: CategoryItemChecker) => {
  return (
    <CategoryItemLi>
      <CategoryLink
        to={`./bestRestaurants/${categoryData.title}`}
        state={categoryData}
      >
        <figure>
          <CategoryImg src={`${food}`} alt="food" />
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
