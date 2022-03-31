import {
  StyledReview,
  profileStyle,
  contentStyle,
  GrayTitle,
  Evaluation,
  FlexBox,
  ReviewControlBox,
} from './Review.styled';
import image from '@/assets/img/food.jpg';
import Images from '@/pages/Restaurants/Images';
import { ReviewScoreImg } from '@/components/ReviewWrite/reviewWrite.styled';
import { ReviewWithId as ReviewType } from '@/firebase/type';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ userId, date, score, images, text, id }: ReviewType) => {
  const { uid } = useAppSelector(({ auth }) => auth.status);

  const editReview = () => {};
  const deleteReview = () => {
    console.log(id);
  };

  return (
    <>
      <StyledReview>
        <FlexBox>
          <div css={profileStyle}>
            <div>
              <img src={image} alt="사진" />
            </div>
            <span>{userId}</span>
          </div>
          <div css={contentStyle}>
            <GrayTitle>{date}</GrayTitle>
            <p>{text}</p>
            {images ? <Images images={images} size="small" /> : ''}
          </div>
          <Evaluation>
            <ReviewScoreImg
              posX={score === 5 ? -1 : score === 3 ? 49 : 98}
              posY={0}
            />
            <span>
              {score === 5 ? '맛있다' : score === 3 ? '괜찮다' : '별로'}
            </span>
          </Evaluation>
        </FlexBox>
        {uid === userId ? (
          <ReviewControlBox>
            <button onClick={deleteReview}>리뷰 삭제</button>
            <Link to={'/'}>리뷰 수정</Link>
          </ReviewControlBox>
        ) : (
          <ReviewControlBox></ReviewControlBox>
        )}
      </StyledReview>
    </>
  );
};

export default Review;
