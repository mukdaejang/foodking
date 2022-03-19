import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const RestaurantItem = styled.li`
  float: left;
  width: 25%;
  padding: 20px;
  list-style: none;
  box-sizing: border-box;
`;

const RestaurantLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

const RestaurantImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RestaurantInfo = styled.figcaption`
  margin-top: 6px;
`;

const RestaurantName = styled.span`
  font-size: 1.3rem;
`;
const RestaurantScore = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-left: 5px;
`;
const RestaurantSubInfo = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.colors.orange}
`;

export {
  RestaurantItem,
  RestaurantLink,
  RestaurantImg,
  RestaurantInfo,
  RestaurantName,
  RestaurantScore,
  RestaurantSubInfo,
};
