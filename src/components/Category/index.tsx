import { CategoryItem } from '@/components';
import { CategoryContent, CategoryList } from './category.styled';
import { categoryDataType } from '@/components/Carousel';

interface CategoryChecker {
  categoryItemList: categoryDataType[];
  cnt: number;
}

const Category = ({ categoryItemList, cnt }: CategoryChecker) => {
  return (
    <li>
      <CategoryContent>
        <CategoryList>
          {categoryItemList.map((categoryItem) => (
            <CategoryItem
              key={categoryItem.id}
              categoryData={categoryItem}
              cnt={cnt}
            />
          ))}
        </CategoryList>
      </CategoryContent>
    </li>
  );
};

export default Category;
