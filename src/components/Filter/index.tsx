import React from 'react';
const Filter = () => {
  console.log(window.location);
  return (
    <>
      <h2>검색 필터 설정</h2>
      <section>
        <label htmlFor="sort-food">정렬</label>
        <input id="sort-food" type="radio"></input>
      </section>
    </>
  );
};

export default Filter;
