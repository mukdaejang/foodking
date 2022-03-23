import React, { useState } from 'react';
import { Section, SubTitle } from '../Filter.styled';
import { Region, City, Label } from './Local.styled';

const Local = () => {
  const seoul = [
    '강남',
    '삼청',
    '건대',
    '가로수길',
    '홍대',
    '이태원',
    '신촌',
    '종로',
  ];
  const kyungido = ['가평군', '수원시', '성님시'];
  const incheon = ['인천 동구', '인천 부평구'];
  const busan = ['부산 해운대구', '부산 서구', '부산 남구'];

  const [curmetro, setCurMetro] = useState(seoul);
  const onClick = (e: any) => {
    console.log(e.target.classList);
  };
  return (
    <section css={Section}>
      <SubTitle>지역</SubTitle>
      <p css={Region} onClick={onClick}>
        <button data-filter="seoul" className="selected">
          서울
        </button>
        <button data-filter="kyungido">경기도</button>
        <button data-filter="incheon">인천</button>
        <button data-filter="busan">부산</button>
        <button data-filter="more">더보기</button>
      </p>
      <div css={City}>
        {curmetro.map((city) => {
          return (
            <li key={city}>
              {/* 체크박스 선택시 로직 추가해야함 */}
              <label htmlFor={city} css={Label}>
                {city}
              </label>
              <input
                id={city}
                value={city}
                type="checkbox"
                className="a11yHidden"
              ></input>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Local;
