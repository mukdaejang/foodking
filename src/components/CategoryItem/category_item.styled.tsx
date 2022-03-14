import { css } from '@emotion/react';

const categoryItem = css`
  float: left;
  position: relative;
  width: 33%;
  padding: 20px;
  box-sizing: border-box;
`;
const categoryLink = css``;
const categoryImg = css`
  width: 100%;
  height: 100%;
`;
const categoryInfo = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 700;
  text-shadow: 6px 6px 16px rgb(0 0 0 / 90%);
`;
const categoryName = css`
  white-space: nowrap;
  font-size: 1.8rem;
  text-align: center;
`;
const categoryText = css`
  font-size: 1rem;
  margin-top: 12px;
  text-align: center;
`;
export {
  categoryItem,
  categoryLink,
  categoryImg,
  categoryInfo,
  categoryName,
  categoryText,
};
