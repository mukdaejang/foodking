import styled from '@emotion/styled';
import unstar from '@/assets/icons/un-star.svg';

const RestaurantItemLi = styled.li`
  width: 100%;
  border-bottom: 1px solid #b9b9b9;
  padding: 30px;
`;

const RestaurantItem = styled.figure`
  display: flex;
  position: relative;

  & a {
    color: #000;
    text-decoration: none;
  }
`;

const RestaurantImg = styled.a`
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
    color: #9b9b9b;
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
  color: #ff792a;
  margin-left: 15px;
`;

const RestaurantLike = styled.div`
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

const RestaurantSubInfo = styled.p`
  display: flex;
  margin: 10px 0;
`;

const RestaurantMenu = styled.small`
  margin-top: 20px;
  flex-grow: 1;

  & p {
    padding: 3px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #9b9b9b;
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
  RestaurantLike,
};
