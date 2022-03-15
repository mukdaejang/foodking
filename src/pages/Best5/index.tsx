import { BestRestaurantItem, MoreButton, LinkCopyButton } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { css } from '@emotion/react';
import React from 'react';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return (
    <>
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 250px;
          background-color: #f7f7f7;
          border-bottom: 1px solid #dbdbdb;
        `}
      >
        <h3
          css={css`
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2.5rem;
            text-align: center;
          `}
        >
          {'강남역 맛집 베스트 5!'}
        </h3>
        <p
          css={css`
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.3rem;
            color: #9b9b9b;
            font-weight: 400;
            margin-top: 12px;
            text-align: center;
          `}
        >
          {'"강남역" 점심은 여기서 해결!'}
        </p>
      </div>
      <div
        css={css`
          width: 70%;
          margin: 0 auto;
          padding: 20px;
        `}
      >
        <ul>
          <BestRestaurantItem />
          <BestRestaurantItem />
          <BestRestaurantItem />
        </ul>
        <MoreButton />
        <LinkCopyButton />
      </div>
    </>
  );
};

export default Main;
