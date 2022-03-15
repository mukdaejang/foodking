import { CategoryItem } from '@/components';
import { CategoryContent, CategoryList } from './category.styled';

interface CategoryChecker {
  categoryItemList: Array<object>;
}

const Category = ({ categoryItemList }: CategoryChecker) => {
  return (
    <CategoryContent>
      <CategoryList>
        {categoryItemList.map((categoryItem, idx: any) => (
          <CategoryItem key={idx} categoryData={categoryItem} />
        ))}
      </CategoryList>
    </CategoryContent>
  );
};

export default Category;
