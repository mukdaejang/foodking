import { useState, useEffect } from 'react';
import {
  Section,
  Left,
  Right,
  UlContainer,
  NoDisplay,
} from './searchResult.styled';
import { Filter, Restaurant } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { getSearchData } from '@/firebase/api/searchkeyword';
import { PostsWithId } from '@/firebase/type';

import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils';

const SearchResult = () => {
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  const [fetchData, setFetchData] = useState<Array<any>>([]);
  const [fetchFilteredData, setFetchFilteredData] = useState<Array<any>>([]);
  const [loadingDataIsZero, setLoadingDataIsZero] = useState<boolean>(false);

  useEffect(() => {
    setLoadingDataIsZero(false);
    const fetchSearchData = async () => {
      const result = await getSearchData(inputSearchKeyword);
      result.sort((a, b) => b.score - a.score);

      if (result.length <= 0) setLoadingDataIsZero(true);
      setFetchData(result);
      setFetchFilteredData(result);
    };
    fetchSearchData();
  }, [inputSearchKeyword]);

  return (
    <article css={Section}>
      <Helmet>
        <title>
          {setDocumentTitle(`${inputSearchKeyword}에 대한 검색 결과`)}
        </title>
      </Helmet>
      <div css={Left}>
        <ul css={UlContainer}>
          {fetchFilteredData &&
            fetchFilteredData.map((elem: PostsWithId) => (
              <Restaurant key={elem.id} info={elem} cnt={3}></Restaurant>
            ))}
        </ul>
        {loadingDataIsZero && (
          <span css={NoDisplay}>
            '{inputSearchKeyword}' 키워드와 일치하는 검색 결과가 없습니다!
          </span>
        )}
      </div>
      <div css={Right}>
        <Filter
          fetchData={fetchData}
          setFetchData={setFetchData}
          fetchFilteredData={fetchFilteredData}
          setFetchFilteredData={setFetchFilteredData}
          loadingDataIsZero={loadingDataIsZero}
          setLoadingDataIsZero={setLoadingDataIsZero}
        ></Filter>
        ;
      </div>
    </article>
  );
};

export default SearchResult;
