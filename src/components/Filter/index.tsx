import React, { useState } from 'react';
import { Container } from './Filter.styled';
import Sort from './Sort';
import Local from './Local';
import FoodKind from './Kind';
const Filter = () => {
  return (
    <div css={Container}>
      <Sort></Sort>
      <Local></Local>
      <FoodKind></FoodKind>
    </div>
  );
};

export default Filter;
