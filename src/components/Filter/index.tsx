import React, { useState } from 'react';
import { Container } from './Filter.styled';
import Sort from './Sort';
const Filter = () => {
  return (
    <div css={Container}>
      <Sort></Sort>
    </div>
  );
};

export default Filter;
