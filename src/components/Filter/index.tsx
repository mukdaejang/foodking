import React, { useState, useEffect, useCallback, MouseEvent } from 'react';
import { Container, ButtonContainer } from './Filter.styled';
import Sort from './Sort';
import Local from './Local';
import FoodKind from './Kind';
import { Posts } from '@/firebase/type';
interface Type {
  fetchData: Array<any>;
  setFetchData: (fetchData: any) => void;
  fetchFilteredData: Array<any>;
  setFetchFilteredData: (fetchfilteredData: any) => void;
  loadingDataIsZero: boolean;
  setLoadingDataIsZero: (LoadingDataIsZero: boolean) => void;
}

const Filter = ({
  fetchData,
  setFetchData,
  fetchFilteredData,
  setFetchFilteredData,
  loadingDataIsZero,
  setLoadingDataIsZero,
}: Type) => {
  const [order, setOrder] = useState<boolean>(false);
  const [local, setLocal] = useState<string[]>([]);
  const [kind, setKind] = useState<string[]>([]);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    setLoadingDataIsZero(false);

    let filteredData = fetchData;
    if (order) {
      filteredData && filteredData.sort((a, b) => b.star - a.star);
    } else filteredData && filteredData.sort((a, b) => b.score - a.score);
    if (local.length > 0 && filteredData) {
      filteredData = filteredData.filter((elem) =>
        local.includes(elem.address.district),
      );
    }
    if (kind.length > 0 && filteredData) {
      filteredData = filteredData.filter((elem) =>
        kind.includes(elem.category),
      );
    }

    window.scrollTo(0, 0);
    if (filteredData.length === 0) setLoadingDataIsZero(true);
    setFetchFilteredData(filteredData);
  };
  return (
    <article css={Container}>
      <Sort order={order} setOrder={setOrder}></Sort>
      <Local local={local} setLocal={setLocal}></Local>
      <FoodKind kind={kind} setKind={setKind}></FoodKind>
      <div css={ButtonContainer}>
        <button onClick={onClick}>적용하기</button>
      </div>
    </article>
  );
};

export default React.memo(Filter);
