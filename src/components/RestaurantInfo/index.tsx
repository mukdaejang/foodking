import { useState, MouseEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { TitleHeader, Descriptions } from './RestaurantInfo.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faStar } from '@fortawesome/free-solid-svg-icons';
import foodImage from '@/assets/img/food.jpg';

import { IconButton } from '@/components';
import { Pen, Star } from '@/components/IconButton';
import Modal from '@/components/Modal';
import SocialLogin from '@/components/Modal/SocialLogin';
import theme from '@/styles/theme';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

import { updateStarCount } from '@/firebase/request';

const RestaurantInfo = () => {
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isSocialModalOpen } = useAppSelector(({ modal }) => modal);
  const { isUserLogin } = useAppSelector(({ user }) => user);

  const status = {
    view: post?.views,
    write: post?.reviews?.length,
    star: post?.star,
  };

  const [starState, setStarState] = useState(false);

  const handleSocialModal = () => {
    dispatch(modalActions.handleSocialModal());
  };

  const { postId = '' } = useParams();

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      let favoriteArray: any = localStorage.getItem('favorite');
      if (!starState) {
        favoriteArray = favoriteArray === null ? [] : JSON.parse(favoriteArray);
        if (favoriteArray.includes(postId)) {
          setStarState(true);
          return;
        } else {
          updateStarCount(postId, true);
          favoriteArray.push(postId);
          favoriteArray = new Set(favoriteArray);
        }
      } else {
        updateStarCount(postId, false);
        favoriteArray = new Set(
          JSON.parse(favoriteArray).filter((item: any) => item !== postId),
        );
      }
      favoriteArray = [...favoriteArray];

      localStorage.setItem('favorite', JSON.stringify(favoriteArray));

      setStarState(!starState);
    } else {
      handleSocialModal();
    }
  };

  const writeReview = () => {
    if (isUserLogin) {
      navigate(`/writeReview/${postId}`);
    } else {
      handleSocialModal();
    }
  };

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
                onClick={() => {
                  writeReview();
                }}
                message="리뷰쓰기"
              >
                <Pen width="30" height="30" fill={theme.colors['gray1000']} />
              </IconButton>
            </div>
            <div>
              <IconButton onClick={changeStar} message="가고싶다">
                <Star fill={theme.colors[starState ? 'orange' : 'gray1000']} />
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
            {/* <button>
              <img src={foodImage} alt={'메뉴'} />
            </button> */}
          </dd>
        </dl>
        <p>업데이트: 2018 2.2</p>
        <dl className="introduce">
          <dt>식당 소개</dt>
          <dd>{post?.description}</dd>
        </dl>
      </Descriptions>
      {isSocialModalOpen && (
        <Modal closePortal={handleSocialModal}>
          <SocialLogin closePortal={handleSocialModal}></SocialLogin>
        </Modal>
      )}
    </div>
  );
};

export default RestaurantInfo;
