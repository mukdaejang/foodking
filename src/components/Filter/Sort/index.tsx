import React, { useState } from 'react';
import { Title, Section, SubTitle } from '../Filter.styled';
import { Sorting, sortActive, sortDeactive } from './Sort.styled';

const Sort = () => {
  const [order, setOrder] = useState(0);
  return (
    <>
      <section css={Section}>
        <SubTitle>정렬</SubTitle>
        <Sorting>
          <div>
            <label
              htmlFor="sorting__asc"
              css={order === 0 ? sortActive : sortDeactive}
              onClick={() => {
                setOrder(0);
              }}
            >
              평점순
              <input
                id="sorting__asc"
                type="radio"
                name="asc"
                value="asc"
                defaultChecked
                checked={!order ? true : false}
              ></input>
            </label>
            <label
              htmlFor="sorting__desc"
              css={order ? sortActive : sortDeactive}
              onClick={() => {
                setOrder(1);
              }}
            >
              인기순
              <input
                id="sorting__desc"
                type="radio"
                name="desc"
                value="desc"
                checked={order === 0 ? false : true}
              ></input>
            </label>
          </div>
        </Sorting>
      </section>
    </>
  );
};

export default Sort;
