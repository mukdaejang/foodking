import React from 'react';
import glassSolid from '@/assets/icons/glass-solid.svg';

import { css, jsx } from '@emotion/react';
import SearchModal from './SearchModal';

const searchBar = css`
  width: 60%;
  margin: 0 auto;
  margin-top: 60px;
`;

const searchBar__field = css`
  margin: 0px;
  padding: 0px;

  height: 54px;
  background: white;

  margin: 0 auto;
  border: 1px solid rgba(255, 133, 0, 1);
  border-radius: 40px;
`;

const findImgStyle = css`
  width: 30px;
  height: 31px;
  padding: 30px;
  opacity: 0.5;
`;

const searchBar__contents = css`
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .contents__left {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .contents__right {
    width: 200px;
    height: 100%;

    display: flex;
    align-items: center;
  }
`;

const search__input = css`
  width: 70%;
  height: 100%;
  font-size: 20px;

  margin: 0;
  padding: 0;
  border: 0;
  :focus {
    outline: none;
  }
`;

const searh__btn = css`
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: white;
  cursor: pointer;

  background-color: #ff7100;
  outline: none;
  border: none;
  border-radius: 40px;
  :hover {
    opacity: 0.6;
  }
`;

const none = css`
  display: none;
`;
const display = css`
  display: block;
  opacity: 0.5;
`;

const position = css`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SearchBox = () => {
  return (
    <div css={searchBar}>
      <fieldset css={searchBar__field}>
        <div css={searchBar__contents}>
          <div className="contents__left">
            <label htmlFor="search__input" />
            <span>
              <img css={findImgStyle} src={glassSolid} alt="glass-solid"></img>
            </span>
            <div css={position}>
              <input
                css={search__input}
                id="search__input"
                className="search__input"
                placeholder="지역, 식당 또는 음식"
              ></input>
              <SearchModal icon={glassSolid}></SearchModal>
            </div>
            <span css={display}>CLEAR</span>
          </div>
          <div className="contents__right">
            <input css={searh__btn} type="submit" value="검색"></input>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBox;
