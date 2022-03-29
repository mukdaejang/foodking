import { MatjibListTags, Category } from '@/components';
import { Title, FloatBox, SortMiddel70 } from '@/components/style';
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getFoodListDocs } from '@/firebase/request';
import { CategoryType } from '@/firebase/type';
import { signInWithRedirect } from 'firebase/auth';

interface MatjipListType {
  title: string;
}

const MatjipList = ({ title }: MatjipListType) => {
  const [foodList, setFoodList] = useState<CategoryType[]>([]);

  useEffect(() => {
    getFoodListDocs(title).then((res: any) => setFoodList(res));
  }, [title]);

  return (
    <SortMiddel70>
      <Title>{`믿고 보는 ${title} 리스트`}</Title>
      <MatjibListTags />
      <FloatBox>
        <Category categoryItemList={foodList} cnt={2}></Category>
      </FloatBox>
    </SortMiddel70>
  );
};

export default MatjipList;
