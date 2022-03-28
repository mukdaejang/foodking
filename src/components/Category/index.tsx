import { CategoryItem } from '@/components';
import { CategoryContent, CategoryList } from './category.styled';
import { categoryDataType } from '@/components/Carousel';

interface CategoryChecker {
  categoryItemList: categoryDataType[];
}

const Category = ({ categoryItemList }: CategoryChecker) => {
  return (
    <li>
      <CategoryContent>
        <CategoryList>
          {categoryItemList.map((categoryItem) => (
            <CategoryItem key={categoryItem.id} categoryData={categoryItem} />
          ))}
        </CategoryList>
      </CategoryContent>
    </li>
  );
};

export default Category;
