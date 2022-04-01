import { CategoryItem } from '@/components';
import { CategoryContent, CategoryList } from './category.styled';
import { CategoryType } from '@/firebase/type';

interface CategoryChecker {
  categoryItemList?: CategoryType[];
  cnt: number;
}

const Category = ({ categoryItemList, cnt }: CategoryChecker) => {
  return (
    <li>
      <CategoryContent>
        <CategoryList>
          {categoryItemList
            ? categoryItemList?.map((categoryItem) => (
                <CategoryItem
                  key={categoryItem.id}
                  categoryData={categoryItem}
                  cnt={cnt}
                />
              ))
            : [...Array(6)].map((_, idx) => (
                <CategoryItem key={idx} cnt={cnt} />
              ))}
        </CategoryList>
      </CategoryContent>
    </li>
  );
};

export default Category;
