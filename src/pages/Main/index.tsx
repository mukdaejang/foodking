import { useState, useEffect, useCallback } from 'react';
import { Restaurants, Carousel, Banner } from '@/components';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SortMiddel95 } from '@/components/style';

/** firebase */
import { getKeywordData } from '@/firebase/api/searchkeyword';
import { keywordSuggestActions } from '@/store/searchkeyword/keyword-slice';

import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

const Main = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(({ auth }) => auth.status);
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  useEffect(() => {
    const fetchKeywordData = async () => {
      const result = await getKeywordData(inputSearchKeyword);
      const [resultSuggest] = [...result.filter((el) => el.id === 'suggest')];
      const [resultPopular] = [...result.filter((el) => el.id === 'popular')];

      dispatch(
        keywordSuggestActions.handleSuggestKeyword(resultSuggest.keyword),
      );
      dispatch(
        keywordSuggestActions.handlePopularKeyword(resultPopular.keyword),
      );
    };
    fetchKeywordData();
  }, [inputSearchKeyword]);

  return (
    <main>
      <Helmet>
        <title>{setDocumentTitle('')}</title>
      </Helmet>
      <Banner />
      <SortMiddel95>
        <Carousel title={'맛집'} />
        <Carousel title={'술집'} />
        <Restaurants title={'맛집'} />
        <Restaurants title={'술집'} />
      </SortMiddel95>
    </main>
  );
};

export default Main;
