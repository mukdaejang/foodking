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
import { useState, useEffect, useRef, forwardRef } from 'react';

const ReviewWrite = () => {
  const [selectScore, setSelectScore] = useState(null);
  const [prevSelectScore, setPrevSelectScore] = useState(null);
  const disabledRef = useRef<HTMLButtonElement>(null);

  const selectScoreHandler = (e: any) => {
    changeScore(e.currentTarget);
  };

  const changeScore = (node: any) => {
    const id = node.id;
    if (id !== selectScore) {
      // 이전에 선택된 것은 회색으로 돌려주기
      if (prevSelectScore) {
        (
          prevSelectScore as HTMLElement
        ).style.color = `${theme.colors.gray300}`;
        (
          (prevSelectScore as HTMLElement).children[0] as HTMLElement
        ).style.backgroundPositionY = '100%';
      }

      // 선택
      setSelectScore(id);
      (node as HTMLElement).style.color = `${theme.colors.orange}`;
      (node.children[0] as HTMLElement).style.backgroundPositionY = '0%';
      setPrevSelectScore(node);
    }
  };

  const changeText = (e: any) => {
    (disabledRef.current as HTMLElement).style.backgroundColor = e.target.value
      ? `${theme.colors.orange}`
      : `${theme.colors.gray300}`;
    (disabledRef.current as HTMLButtonElement).disabled = e.target.value
      ? false
      : true;
  };

  return (
    <Review>
      <SortMiddel60>
        <RestaurantsTitle>까스까스</RestaurantsTitle>
        <SubTitle>에 대한 솔직한 리뷰를 써주세요.</SubTitle>
        <ReviewContent>
          <ReviewScoreGroup>
            <li>
              <ReviewScoreButton
                onClick={selectScoreHandler}
                id={'good'}
                posX={-1}
                posY={100}
              >
                맛있다
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton
                onClick={selectScoreHandler}
                id={'middle'}
                posX={49}
                posY={100}
              >
                괜찮아요
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton
                onClick={selectScoreHandler}
                id={'bad'}
                posX={98}
                posY={100}
              >
                별로
              </ReviewScoreButton>
            </li>
          </ReviewScoreGroup>
          <ReviewText
            onInput={changeText}
            placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
          ></ReviewText>
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
          <Button
            background={theme.colors.gray500}
            color={theme.colors.white}
            disabled
            forwardRef={disabledRef}
          >
            리뷰 올리기
          </Button>
        </ButtonGroup>
      </SortMiddel60>
    </Review>
  );
};

export default ReviewWrite;
