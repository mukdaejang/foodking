import React, { useState, useEffect, MouseEvent } from 'react';
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
}

const Filter = ({
  fetchData,
  setFetchData,
  fetchFilteredData,
  setFetchFilteredData,
}: Type) => {
  const [order, setOrder] = useState<boolean>(false);
  const [local, setLocal] = useState<string[]>([]);
  const [kind, setKind] = useState<string[]>([]);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    let temp = fetchData;

    if (order) {
      temp && temp.sort((a, b) => b.star - a.star);
    }
    if (local.length > 0 && temp) {
      temp = temp.filter((elem) => local.includes(elem.address.district));
    }
    if (kind.length > 0 && temp) {
      temp = temp.filter((elem) => kind.includes(elem.category));
    }
    console.log(temp);
    setFetchFilteredData(temp);
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

export default Filter;
