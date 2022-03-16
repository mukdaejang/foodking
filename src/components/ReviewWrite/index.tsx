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
import { ReviewScoreButton } from './ReviewScore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components';
import theme from '@/styles/theme';
import face from '@/assets/icons/face-icon.png';

const ReviewWrite = () => {
  return (
    <Review>
      <SortMiddel60>
        <RestaurantsTitle>까스까스</RestaurantsTitle>
        <SubTitle>에 대한 솔직한 리뷰를 써주세요.</SubTitle>
        <ReviewContent>
          <ReviewScoreGroup>
            <li>
              <ReviewScoreButton posX={-1} posY={100}>
                맛있다
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton posX={49} posY={100}>
                괜찮아요
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton posX={98} posY={100}>
                별로
              </ReviewScoreButton>
            </li>
          </ReviewScoreGroup>
          <ReviewText placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"></ReviewText>
        </ReviewContent>
        <ReviewImg>
          <label htmlFor="file">
            <FontAwesomeIcon icon={faPlus} size="2x" color="lightgray" />
          </label>
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
