import {
  BestRestaurantItem,
  MoreButton,
  LinkCopyButton,
  MatjibListTags,
} from '@/components';
import {
  Title,
  GrayContainer,
  ContainerTitle,
  ContainerText,
  SortMiddel70,
} from '@/components/style';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { categoryDataType } from '@/components/Carousel';
import { getBestPostListDocs } from '@/firebase/request';

export interface BestRestaurantType {
  name: string;
  address: string;
  score: number;
  category: string;
  id: string;
}

interface LocationParams {
  pathname: string;
  state: categoryDataType;
  search: string;
  hash: string;
  key: string;
}

const BestRestaurants = () => {
  const location = useLocation();
  const data: any = location.state;

  const [postList, setPostList] = useState<BestRestaurantType[]>([]);

  useEffect(() => {
    getBestPostListDocs(data.list).then((res) => setPostList(res));
  }, []);

  return (
    <>
      <GrayContainer>
        <ContainerTitle>{data.title}</ContainerTitle>
        <ContainerText>{data.description}</ContainerText>
      </GrayContainer>
      <SortMiddel70>
        <ul>
          {postList.map((restaurant: BestRestaurantType) => (
            <BestRestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ul>
        <MoreButton />
        <LinkCopyButton />
      </SortMiddel70>
      <GrayContainer>
        <SortMiddel70>
          <Title>실시간 인기 키워드</Title>
          <MatjibListTags />
        </SortMiddel70>
      </GrayContainer>
    </>
  );
};

export default BestRestaurants;
