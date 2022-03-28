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
import { BestRestaurants } from '@/components';
const Best5 = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return <BestRestaurants />;
};

export default Best5;
