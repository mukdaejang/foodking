import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
// import { Carousel, Banner, Restaurants } from '@/components';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SortMiddel95 } from '@/components/style';
/** firebase */
import { getKeywordData } from '@/firebase/api/searchkeyword';
import { keywordSuggestActions } from '@/store/searchkeyword/keyword-slice';
import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

/** lazy loading components */
let Restaurants = lazy(() => {
  return import('@/components/Restaurants');
});
let Banner = lazy(() => {
  return import('@/components/Banner');
});
let Carousel = lazy(() => {
  return import('@/components/Carousel');
});

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
      <Suspense fallback={<div>test</div>}>
        <Banner />
        <SortMiddel95>
          <Carousel title={'맛집'} />
          <Carousel title={'술집'} />
          <Restaurants title={'맛집'} />
          <Restaurants title={'술집'} />
        </SortMiddel95>
      </Suspense>
    </main>
  );
};

export default Main;
