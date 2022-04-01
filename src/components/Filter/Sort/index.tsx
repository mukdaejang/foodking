import React, { useState } from 'react';
import { Section, SubTitle } from '../Filter.styled';
import { Sorting, sortActive, sortDeactive } from './Sort.styled';
import a11yHidden from '@/styles/a11yHidden';

interface PropsType {
  order: boolean;
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
}
const booleanToSort = {
  false: '평점순',
  true: '인기순',
};

const Sort = ({ order, setOrder }: PropsType) => {
  return (
    <>
      <section css={Section}>
        <SubTitle>정렬</SubTitle>
        <Sorting role="none">
          <label
            htmlFor="sorting__asc"
            css={order === false ? sortActive : sortDeactive}
            onClick={() => {
              setOrder(false);
            }}
            tabIndex={0}
          >
            평점순
            <input
              id="sorting__asc"
              css={a11yHidden}
              type="radio"
              name="asc"
              defaultValue="asc"
              checked={!order ? true : false}
              readOnly
              tabIndex={-1}
            ></input>
          </label>
          <label
            htmlFor="sorting__desc"
            css={order ? sortActive : sortDeactive}
            onClick={() => {
              setOrder(true);
            }}
            tabIndex={0}
          >
            인기순
            <input
              id="sorting__desc"
              css={a11yHidden}
              type="radio"
              name="desc"
              value="desc"
              checked={order === false ? false : true}
              readOnly
            ></input>
          </label>
        </Sorting>
      </section>
    </>
  );
};

export default React.memo(Sort);
