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
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return (
    <>
      <GrayContainer>
        <ContainerTitle>강남역 맛집 베스트 5!</ContainerTitle>
        <ContainerText>"강남역" 점심은 여기서 해결!</ContainerText>
      </GrayContainer>
      <SortMiddel70>
        <ul>
          <BestRestaurantItem />
          <BestRestaurantItem />
          <BestRestaurantItem />
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

export default Main;
