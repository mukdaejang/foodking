import {
  Review,
  RestaurantsTitle,
  SubTitle,
  ReviewContent,
  ReviewScoreGroup,
  ReviewScore,
  ReviewText,
  ReviewImg,
  ButtonGroup,
} from './reviewWrite.styled';
import { SortMiddel60 } from '@/components/style';
import { Button } from '@/components';
import theme from '@/styles/theme';

const ReviewWrite = () => {
  return (
    <Review>
      <SortMiddel60>
        <RestaurantsTitle>까스까스</RestaurantsTitle>
        <SubTitle>에 대한 솔직한 리뷰를 써주세요.</SubTitle>
        <ReviewContent>
          <ReviewScoreGroup>
            <li>
              <ReviewScore>맛있다</ReviewScore>
            </li>
            <li>
              <ReviewScore>괜찮다</ReviewScore>
            </li>
            <li>
              <ReviewScore>별로</ReviewScore>
            </li>
          </ReviewScoreGroup>
          <ReviewText>리뷰써라 돼지야!</ReviewText>
        </ReviewContent>
        <ReviewImg>
          <label htmlFor="file"></label>
          <input id="file" type="file" />
        </ReviewImg>

        <ButtonGroup>
          <Button background={theme.colors.white} color={theme.colors.gray300}>
            취소
          </Button>
          <Button background={theme.colors.gray500} color={theme.colors.white}>
            리뷰 올리기
          </Button>
        </ButtonGroup>
      </SortMiddel60>
    </Review>
  );
};

export default ReviewWrite;
