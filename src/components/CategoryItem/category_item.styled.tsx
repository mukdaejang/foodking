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

const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

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
  font-size: 1.8rem;
  text-align: center;
`;
const CategoryText = styled.p`
  font-size: 1rem;
  margin-top: 12px;
  text-align: center;
`;
export {
  CategoryItemLi,
  CategoryLink,
  CategoryImg,
  CategoryInfo,
  CategoryTitle,
  CategoryText,
};
