import { css } from '@emotion/react';
import unstar from '@/assets/icons/un-star.svg';
import star from '@/assets/icons/star.svg';

const restaurantItem = css`
  /* overflow: hidden; */
  display: flex;
  position: relative;

  & a {
    color: #000;
    text-decoration: none;
  }
`;

const restaurantImg = css`
  width: 45%;
  & img {
    width: 100%;
  }
`;

const restaurantInfo = css`
  width: 55%;
  padding: 10px 40px;

  & > address,
  small {
    font-size: 1rem;
    margin-top: 5px;
    /* font-weight: 400; */
    color: #9b9b9b;
  }
  & address {
    margin-bottom: 20px;
  }
  & small:first-child {
    margin-right: 10px;
  }
`;
const restaurantTitle = css`
  font-size: 2rem;
`;
const restaurantScore = css`
  color: #ff792a;
  margin-left: 15px;
`;

const restaurantLike = css`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > button {
    all: unset;
    box-sizing: border-box;
    padding: 7px;
    width: 30px;
    height: 30px;
    background: url('${unstar}') no-repeat center center / cover;
    cursor: pointer;
  }

  & > span {
    padding-top: 5px;
    font-size: 0.7rem;
    color: #9b9b9b;
    white-space: nowrap;
  }
`;

const restaurantSubInfo = css`
  display: flex;
  margin: 10px 0;
`;
const restaurantMenu = css`
  margin-top: 20px;
  flex-grow: 1;

  & p {
    padding: 3px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #9b9b9b;
    &:first-child {
      padding-top: 0;
    }
  }
  & span:last-child {
    float: right;
  }
`;

const restaurantMore = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export {
  restaurantItem,
  restaurantImg,
  restaurantInfo,
  restaurantTitle,
  restaurantScore,
  restaurantSubInfo,
  restaurantMenu,
  restaurantMore,
  restaurantLike,
};
