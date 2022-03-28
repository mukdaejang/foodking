import React from 'react';
import { css } from '@emotion/react';
import { Filter } from '@/components';
import { useAppSelector } from '@/store/hooks';
const SearchResult = () => {
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);
  console.log(inputSearchKeyword);

  return <Filter></Filter>;
};

export default SearchResult;
