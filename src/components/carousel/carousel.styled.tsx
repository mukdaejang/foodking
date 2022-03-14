import { css } from '@emotion/react';
import arrow from '@/assets/arrow.png';

const carousel = css`
  position: relative;
  margin: 0 auto;
  padding: 30px 0;
`;
const categoryTitle = css`
  color: #ff792a;
  font-size: 1.5rem;
  font-weight: 700;
`;
const carouselView = css`
  overflow: hidden;
  margin: 0 50px;
`;
const carouselItems = css`
  display: flex;
  white-space: nowrap;

  & > li {
    display: inline-block;
    flex-shrink: 0;
    width: 100%;
  }
`;
const carouselControl = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  width: 20px;
  height: 80px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  z-index: 99;
  &:focus {
    outline: none;
  }
  background: url('${arrow}') no-repeat center center / cover;
`;
const carouselControlPrev = css`
  left: 15px;
  background-position: -20px 0;
`;
const carouselControlNext = css`
  background-position: -40px 0;
  right: 15px;
`;
const navigationControl = css`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  & li {
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #ff792a;
    cursor: pointer;
  }
`;
export {
  carousel,
  categoryTitle,
  carouselView,
  carouselItems,
  carouselControl,
  carouselControlPrev,
  carouselControlNext,
  navigationControl,
};
