import { css } from '@emotion/react';
import unstar from '@/assets/icons/un-star.svg';
import star from '@/assets/icons/star.svg';

const restaurantItem = css`
  /* overflow: hidden; */
  display: flex;
  position: relative;
`;

const restaurantImg = css`
  width: 45%;
  /* float: left; */
`;

const restaurantInfo = css`
  width: 55%;
  padding: 10px 40px;

  & > address,
  small {
    font-size: 1.2rem;
    margin-top: 5px;
    /* font-weight: 400; */
    color: #9b9b9b;
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
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 10px;
  width: 40px;
  height: 40px;
  background: url('${unstar}') no-repeat center center / cover;
`;

const restaurantSubInfo = css`
  display: flex;
  margin: 20px 0;
`;
const restaurantMenu = css`
  margin-top: 20px;
  flex-grow: 1;

  & p {
    padding: 5px 0;
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
