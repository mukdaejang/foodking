import { Fragment, useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { restaurantActions } from '@/store/restaurants/restaurants-slice';
import { ReviewWithId as ReviewType, User } from '@/firebase/type';
import { deleteReviewDoc, getReviewWriter } from '@/firebase/request';

import Images from '@/pages/Restaurants/Images';
import {
  StyledReview,
  profileStyle,
  contentStyle,
  GrayTitle,
  Evaluation,
  FlexBox,
  ReviewControlBox,
} from './Review.styled';
import { ReviewScoreImg } from '@/components/ReviewWrite/reviewWrite.styled';
// import image from '@/assets/img/food.jpg';

const Review = ({ userId, date, score, images, text, id }: ReviewType) => {
  const { uid } = useAppSelector(({ auth }) => auth.status);
  const { postId = '' } = useParams();
  const dispatch = useAppDispatch();

  const deleteReview = async () => {
    const check = window.confirm('리뷰를 삭제하시겠습니까?');
    if (check)
      await deleteReviewDoc(id).then((res) => {
        dispatch(restaurantActions.removeReview(res));
      });
  };

  const [reviewWriter, setReviewWriter] = useState<User>();
  const handleReviewWriter = useCallback(async (reviewWriterId) => {
    const reviewWriterData = await getReviewWriter(reviewWriterId);
    if (!reviewWriterData) {
      return;
    }
    setReviewWriter(reviewWriterData);
  }, []);

  useEffect(() => {
    if (userId) {
      handleReviewWriter(userId);
    }
  }, [userId, handleReviewWriter]);

  return (
    <Fragment>
      <StyledReview>
        <FlexBox>
          <div css={profileStyle}>
            <div>
              <img
                src={reviewWriter?.profileImgURL}
                alt={`${reviewWriter?.userName} 프로필`}
              />
            </div>
            <span>{reviewWriter?.userName}</span>
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
            <Link to={`/editReview/${postId}`} state={{ reviewId: id }}>
              리뷰 수정
            </Link>
          </ReviewControlBox>
        ) : (
          <ReviewControlBox></ReviewControlBox>
        )}
      </StyledReview>
    </Fragment>
  );
};

export default Review;
