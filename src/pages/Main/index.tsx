import { useState, useEffect, useCallback } from 'react';
import { Restaurants, Carousel, Banner } from '@/components';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { SortMiddel95 } from '@/components/style';

/** firebase */
import { getKeywordData } from '@/firebase/api/searchkeyword';
import { keywordSuggestActions } from '@/store/searchkeyword/keyword-slice';

const fetchKeywordData = async (keyword: string) => {
  try {
    const result = await getKeywordData(keyword);
    console.log(result);
    return result;
  } catch (e) {
    console.error(e);
  }
};

const Main = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(({ auth }) => auth.status);
  const { inputSearchKeyword, suggest, popular } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  const [keywordData, setKeywordData] = useState();

  // const handleSuggestKeywordFunc = (
  //   id: string,
  //   keyword1: string,
  //   keyword2: string,
  //   keyword3: string,
  //   keyword4: string,
  // ) => {
  //   dispatch(
  //     keywordSuggestActions.handleSuggestKeyword([
  //       keyword1,
  //       keyword2,
  //       keyword3,
  //       keyword4,
  //     ]),
  //   );

  //   const handlePopularKeyword = (
  //     id: string,
  //     keyword1: string,
  //     keyword2: string,
  //     keyword3: string,
  //     keyword4: string,
  //   ) => {
  //     dispatch(
  //       keywordSuggestActions.handleSuggestKeyword([
  //         keyword1,
  //         keyword2,
  //         keyword3,
  //         keyword4,
  //       ]),
  //     );
  //   };

  // useEffect(() => {
  //   const fetchKeywordData = async () => {
  //     const result = await getKeywordData(inputSearchKeyword);
  //     // handleSuggestKeywordFunc(result[0].);
  //   };
  //   fetchKeywordData();
  // }, [inputSearchKeyword]);

  return (
    <div>
      <Banner />
      <SortMiddel95>
        <Carousel title={'맛집'} />
        <Carousel title={'술집'} />
        <Restaurants title={'맛집'} />
        <Restaurants title={'술집'} />
      </SortMiddel95>
    </div>
  );
};

export default Main;
