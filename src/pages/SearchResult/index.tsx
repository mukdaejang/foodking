import React, { useState, useEffect } from 'react';
import { Section, Left, Right, item, UlContainer } from './searchResult.styled';
import { Filter, Restaurant } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { getSearchData } from '@/firebase/api/searchkeyword';
import { Posts, PostsWithId } from '@/firebase/type';

const SearchResult = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  const [fetchData, setFetchData] = useState<Array<any>>([]);
  const [fetchFilteredData, setFetchFilteredData] = useState<Array<any>>([]);

  console.log(inputSearchKeyword);
  useEffect(() => {
    const fetchSearchData = async () => {
      const result = await getSearchData(inputSearchKeyword);
      result.sort((a, b) => b.score - a.score);
      setFetchData(result);
      setFetchFilteredData(result);
    };
    fetchSearchData();
  }, []);

  return (
    <article css={Section}>
      <div css={Left}>
        <ul css={UlContainer}>
          {fetchFilteredData &&
            fetchFilteredData.map((elem: PostsWithId) => (
              <Restaurant key={elem.id} info={elem} cnt={3}></Restaurant>
            ))}
        </ul>
      </div>
      <div css={Right}>
        <Filter
          fetchData={fetchData}
          setFetchData={setFetchData}
          fetchFilteredData={fetchFilteredData}
          setFetchFilteredData={setFetchFilteredData}
        ></Filter>
        ;
      </div>
    </article>
  );
};

export default SearchResult;
