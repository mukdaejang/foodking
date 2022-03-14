import { css } from '@emotion/react';

const restaurantItem = css`
  float: left;
  width: 25%;
  padding: 20px;
  list-style: none;
  box-sizing: border-box;
`;

const restaurantLink = css`
  color: #000;
  text-decoration: none;
`;

const restaurantImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const restaurantInfo = css`
  margin-top: 6px;
`;

const restaurantName = css`
  font-size: 1.3rem;
`;
const restaurantScore = css`
  font-size: 1.3rem;
  color: #ff792a;
  margin-left: 5px;
`;
const restaurantSubInfo = css`
  margin-top: 6px;
  font-size: 0.9rem;
  color: #9b9b9b;
`;

export {
  restaurantItem,
  restaurantLink,
  restaurantImg,
  restaurantInfo,
  restaurantName,
  restaurantScore,
  restaurantSubInfo,
};
