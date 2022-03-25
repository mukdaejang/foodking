import React, { useState, useEffect } from 'react';
import { Container, ButtonContainer } from './Filter.styled';
import Sort from './Sort';
import Local from './Local';
import FoodKind from './Kind';

const Filter = () => {
  const [order, setOrder] = useState<boolean>(false);
  const [local, setLocal] = useState<string[]>([]);
  const [kind, setKind] = useState<string[]>([]);

  const onClick = () => {};
  return (
    <div css={Container}>
      <Sort order={order} setOrder={setOrder}></Sort>
      <Local local={local} setLocal={setLocal}></Local>
      <FoodKind kind={kind} setKind={setKind}></FoodKind>
      <div css={ButtonContainer} role="none">
        <button onClick={onClick}>적용하기</button>
      </div>
    </div>
  );
};

export default Filter;
