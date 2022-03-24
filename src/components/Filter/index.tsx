import React, { useState } from 'react';
import { Container, ButtonContainer } from './Filter.styled';
import Sort from './Sort';
import Local from './Local';
import FoodKind from './Kind';

const Filter = () => {
  const onClick = () => {};
  return (
    <div css={Container}>
      <Sort></Sort>
      <Local></Local>
      <FoodKind></FoodKind>
      <div css={ButtonContainer} role="none">
        <button onClick={onClick}>적용하기</button>
      </div>
    </div>
  );
};

export default Filter;
