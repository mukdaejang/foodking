import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const RestaurantItemLi = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  padding: 30px;
`;

const RestaurantItem = styled.figure`
  display: flex;
  position: relative;

  & a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`;

const RestaurantImg = styled(Link)`
  width: 45%;
  & img {
    width: 100%;
  }
`;

const RestaurantInfo = styled.figcaption`
  width: 55%;
  padding: 10px;
  padding-left: 40px;

  & > address,
  small {
    font-size: 0.9rem;
    margin-top: 5px;
    /* font-weight: 400; */
    color: ${({ theme }) => theme.colors.gray300};
  }
  & address {
    margin-bottom: 20px;
  }
  & small:first-of-type {
    margin-right: 10px;
  }
`;
const RestaurantTitle = styled.h3`
  font-size: 2rem;
`;
const RestaurantScore = styled.span`
  color: ${({ theme }) => theme.colors.orange};
  margin-left: 15px;
`;

const RestaurantSubInfo = styled.div`
  display: flex;
  margin: 10px 0;
`;

const RestaurantMenu = styled.small`
  margin-top: 20px;
  flex-grow: 1;

  & p {
    padding: 3px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
    &:first-of-type {
      padding-top: 0;
    }
  }

  & span:last-child {
    float: right;
  }
`;

const RestaurantMore = styled.small`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export {
  RestaurantItemLi,
  RestaurantItem,
  RestaurantImg,
  RestaurantInfo,
  RestaurantTitle,
  RestaurantScore,
  RestaurantSubInfo,
  RestaurantMenu,
  RestaurantMore,
};
