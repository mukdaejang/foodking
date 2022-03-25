import { useState, useCallback } from 'react';

import { TitleHeader, Descriptions } from './RestaurantInfo.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faStar } from '@fortawesome/free-solid-svg-icons';
import foodImage from '@/assets/img/food.jpg';

import { IconButton } from '@/components';
import { Pen, Star } from '@/components/IconButton';
import theme from '@/styles/theme';

const RestaurantInfo = () => {
  const status = {
    view: 141982,
    write: 114,
    star: 3787,
  };

  const restaurantInfo = {
    address: [
      '서울특별시 용산구 한강대로38가길 7-2',
      '서울시 용산구 한강로2가 153-8',
    ],
  };

  const menus = [
    { name: '브라운돈가스', price: 10000 },
    { name: '브라운치킨가스', price: 10000 },
    { name: '로스가스', price: 10000 },
    { name: '화이트돈가스', price: 13000 },
    { name: '크림우동', price: 9000 },
  ].map((menu, id) => ({ ...menu, id }));

  const [starColor, setStarColor] = useState(theme.colors.gray1000);
  const [penColor, setPenColor] = useState(theme.colors.gray1000);
  const toggleIconColor = useCallback(
    (setState) => () => {
      const {
        colors: { gray1000, orange },
      } = theme;
      setState((prevColor: string) =>
        prevColor === gray1000 ? orange : gray1000,
      );
    },
    [],
  );

  return (
    <div>
      <TitleHeader status={status}>
        <div className="title">
          <div>
            <h1>북천</h1>
            <span className="orange">4.6</span>
          </div>
          <div className="icon-btns">
            <div>
              <IconButton
                onClick={toggleIconColor(setPenColor)}
                message="가고싶다"
              >
                <Pen width="30" height="30" fill={penColor} />
              </IconButton>
            </div>
            <div>
              <IconButton
                onClick={toggleIconColor(setStarColor)}
                message="가고싶다"
              >
                <Star fill={starColor} />
              </IconButton>
            </div>
          </div>
        </div>
        <div>
          <span className="view">
            <FontAwesomeIcon icon={faEye} />
          </span>
          <span className="write">
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </TitleHeader>
      <Descriptions>
        <dl>
          <dt>주소</dt>
          <dd>
            <span>{restaurantInfo.address[0]}</span>
            {restaurantInfo.address[1] ? (
              <span className="address_jibun">{restaurantInfo.address[1]}</span>
            ) : (
              ''
            )}
          </dd>
        </dl>
        <dl>
          <dt>전화번호</dt>
          <dd>02-796-2461</dd>
        </dl>
        <dl>
          <dt>음식 종류</dt>
          <dd>까스 요리</dd>
        </dl>
        <dl>
          <dt>가격대</dt>
          <dd>만원 미만</dd>
        </dl>
        <dl>
          <dt>주차</dt>
          <dd>주차공간없음</dd>
        </dl>
        <dl>
          <dt>영업시간</dt>
          <dd>
            <span>월~금: 11:30 - 20:00</span>
            <span>토: 11:30 - 15:00</span>
          </dd>
        </dl>
        <dl>
          <dt>쉬는시간</dt>
          <dd>13:30 - 17:00</dd>
        </dl>
        <dl>
          <dt>휴일</dt>
          <dd>일</dd>
        </dl>
        <dl>
          <dt>메뉴</dt>
          <dd>
            <ul className="menus">
              {menus.map(({ name, price }) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{price.toLocaleString()}원</span>
                </li>
              ))}
            </ul>
            <button>
              <img src={foodImage} alt={'메뉴'} />
            </button>
          </dd>
        </dl>
        <p>업데이트: 2018 2.2</p>
        <dl className="introduce">
          <dt>식당 소개</dt>
          <dd>
            로스가스, 브라운돈가스, 치킨가스, 가쓰오 우동 등을 파는 돈까스
            전문점
          </dd>
        </dl>
      </Descriptions>
    </div>
  );
};

export default RestaurantInfo;
