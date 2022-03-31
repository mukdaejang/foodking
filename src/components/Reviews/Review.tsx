import {
  StyledReview,
  profileStyle,
  contentStyle,
  GrayTitle,
  Evaluation,
} from './Review.styled';
import image from '@/assets/img/food.jpg';
import Images from '@/pages/Restaurants/Images';
import { ReviewScoreImg } from '@/components/ReviewWrite/reviewWrite.styled';
import { Review as ReviewType } from '@/firebase/type';

const Review = ({ userId, date, score, images, text }: ReviewType) => {
  return (
    <StyledReview>
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
        <span>{score === 5 ? '맛있다' : score === 3 ? '괜찮다' : '별로'}</span>
      </Evaluation>
    </StyledReview>
  );
};

export default Review;
