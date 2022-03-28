import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const CategoryItemLi = styled.li`
  float: left;
  position: relative;
  width: calc(100% / 3);
  padding: 20px;
  box-sizing: border-box;
`;

const CategoryLink = styled(Link)``;

const CategoryImgBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 50%;
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    border: 0.5px solid transparent;
    &:last-child {
      left: 50%;
    }
  }
`;
const CategorySkeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CategoryImg = styled.img``;

const CategoryInfo = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  text-shadow: 6px 6px 16px rgb(0 0 0 / 90%);
`;
const CategoryTitle = styled.h3`
  white-space: nowrap;
  font-size: 1.7vw;
  /* font-size: 1.8rem; */
  text-align: center;
`;
const CategoryText = styled.p`
  font-size: 1.1vw;
  margin-top: 18px;
  text-align: center;
`;
export {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
  CategoryImgBox,
  CategorySkeleton,
};
