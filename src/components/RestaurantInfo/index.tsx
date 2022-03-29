import { useState, useCallback } from 'react';

import { useAppSelector } from '@/store/hooks';

import { TitleHeader, Descriptions } from './RestaurantInfo.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faStar } from '@fortawesome/free-solid-svg-icons';
import foodImage from '@/assets/img/food.jpg';

import { IconButton } from '@/components';
import { Pen, Star } from '@/components/IconButton';
import theme from '@/styles/theme';

const RestaurantInfo = () => {
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);

  const status = {
    view: 141982,
    write: 114,
    star: 3787,
  };

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
            <h1>{post?.name}</h1>
            <span className="orange">{post?.score}</span>
          </div>
          <div className="icon-btns">
            <div>
              <IconButton
                onClick={toggleIconColor(setPenColor)}
                message="리뷰쓰기"
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
            {post?.address?.city} {post?.address?.district}{' '}
            {post?.address?.detail}
          </dd>
        </dl>
        <dl>
          <dt>전화번호</dt>
          <dd>{post?.phone}</dd>
        </dl>
        <dl>
          <dt>음식 종류</dt>
          <dd>{post?.category}</dd>
        </dl>
        <dl>
          <dt>영업시간</dt>
          <dd>
            {post?.time?.map((_time) => (
              <span key={_time}>{_time}</span>
            ))}
          </dd>
        </dl>
        <dl>
          <dt>쉬는시간</dt>
          <dd>{post?.breakTime}</dd>
        </dl>
        <dl>
          <dt>메뉴</dt>
          <dd>
            <ul className="menus">
              {post?.menus?.map(({ name, price }) => (
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
          <dd>{post?.description}</dd>
        </dl>
      </Descriptions>
    </div>
  );
};

export default RestaurantInfo;
