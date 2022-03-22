import {
  StyledReview,
  profileStyle,
  contentStyle,
  GrayTitle,
  Evaluation,
} from './Review.styled';
import image from '@/assets/img/food.jpg';
import Images from '@/pages/Restaurants/Images';

const Review = () => {
  const images = Array(2)
    .fill(null)
    .map((_, i) => ({
      id: String(i),
      title: '햄버거',
      src: image,
    }));

  return (
    <StyledReview>
      <div css={profileStyle}>
        <div>
          <img src={image} alt="사진" />
        </div>
        <span>우챠우챠</span>
      </div>
      <div css={contentStyle}>
        <GrayTitle>2022-02-01</GrayTitle>
        <p>
          좋은 후기를 많이 봐서 예전에 동생한테 추천해 줬었는데 첨엔
          피쉬버거라서 싫어하다가 막상 먹어보니 너무 맛있어서 더 시켜 먹었다는
          ㅋㅋㅋ생생 후기를 듣고!!!
        </p>
        <Images images={images} size="small" />
      </div>
      <Evaluation>
        <img src={image} alt="맛있다" />
        <span>맛있다</span>
      </Evaluation>
    </StyledReview>
  );
};

export default Review;
