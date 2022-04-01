import { MatjibListTags, Category } from '@/components';
import { Title, FloatBox, SortMiddel70 } from '@/components/style';
import { useState, useEffect } from 'react';
import { getFoodListDocs } from '@/firebase/request';
import { CategoryType } from '@/firebase/type';

import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

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
      <Helmet>
        <title>{setDocumentTitle(`믿고 보는 ${title} 리스트`)}</title>
      </Helmet>
      <Title>{`믿고 보는 ${title} 리스트`}</Title>
      <MatjibListTags />
      <FloatBox>
        <Category categoryItemList={foodList} cnt={2}></Category>
      </FloatBox>
    </SortMiddel70>
  );
};

export default MatjipList;
