import { CategoryItem } from '@/components';
import { categoryContent, categoryList } from './category.styled';

interface CategoryChecker {
  categoryItemList: Array<object>;
}

const Category = ({ categoryItemList }: CategoryChecker) => {
  return (
    <section css={categoryContent}>
      <ul css={categoryList}>
        {categoryItemList.map((categoryItem, idx: any) => (
          <CategoryItem key={idx} categoryData={categoryItem} />
        ))}
      </ul>
    </section>
  );
};

export default Category;
