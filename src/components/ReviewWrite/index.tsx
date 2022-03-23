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
  ReviewSelectImgs,
  ReviewSelectImg,
  ImgDelete,
} from './reviewWrite.styled';
import { SortMiddel60 } from '@/components/style';
import { ReviewScoreButton } from './ReviewScore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components';
import theme from '@/styles/theme';
import { useState, useRef } from 'react';
import {
  postReviewDocs,
  postImage,
  postRestaurantsDocs,
} from '@/firebase/request';
import { useAppSelector } from '@/store/hooks';

const ReviewWrite = () => {
  const userId = useAppSelector(({ auth }) => auth.status.uid);
  const [selectScore, setSelectScore] = useState(null);
  const [prevSelectScore, setPrevSelectScore] = useState(null);
  const disabledRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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

  // 이미지 미리보기 할 url을 저장해줄 state
  const [fileImage, setFileImage] = useState<Array<Blob>>([]);
  const [fileImageSrc, setFileImageSrc] = useState<Array<string>>([]);

  // 파일 저장
  const saveFileImage = (e: any) => {
    if (fileRef.current?.files) {
      // console.log(fileRef.current?.files[0]);
      setFileImage([...fileImage, fileRef.current?.files[0]]);
      setFileImageSrc([
        ...fileImageSrc,
        URL.createObjectURL(fileRef.current?.files[0]),
      ]);
      e.target.value = '';
    }
  };

  // 파일 삭제
  const deleteFileImage = (e: any) => {
    const fileName = e.currentTarget.parentNode.parentNode.dataset.id;
    setFileImageSrc([...fileImageSrc].filter((file: any) => fileName !== file));
    URL.revokeObjectURL(fileName);
  };

  // const restaurants = [
  //   { address: '강남구', name: '까스까스', category: '일식', score: 4.0 },
  //   { address: '강남구', name: '빽다방', category: '카페', score: 4.5 },
  //   { address: '강남구', name: '육쌈냉면', category: '한식', score: 3.5 },
  //   { address: '가로수길', name: '좋은초밥', category: '일식', score: 4.5 },
  //   { address: '가로수길', name: '오늘의 초밥', category: '일식', score: 4.8 },
  //   { address: '가로수길', name: '맛나분식', category: '분식', score: 4.9 },
  //   { address: '홍대', name: '무지개맥주', category: '주점', score: 4.9 },
  //   { address: '홍대', name: '도미노', category: '양식', score: 4.2 },
  //   { address: '홍대', name: '홍콩반점', category: '중식', score: 4.0 },
  //   { address: '이태원', name: '피자헛', category: '양식', score: 4.3 },
  //   { address: '이태원', name: '우동전문', category: '일식', score: 4.1 },
  //   { address: '건대', name: '빕스', category: '양식', score: 3.9 },
  //   { address: '건대', name: '쿠우쿠우', category: '일식', score: 5.0 },
  //   { address: '신촌', name: '1943', category: '주점', score: 4.5 },
  //   { address: '삼청', name: '인생맥주', category: '주점', score: 4.1 },
  //   { address: '종로', name: '소주한잔', category: '주점', score: 4.2 },
  //   { address: '종로', name: '오늘동', category: '일식', score: 4.8 },
  // ];

  const craeteReview = async () => {
    // 현재 시간
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    // 이미지
    const images = await Promise.all(
      fileImage.map(async (file) => await postImage(file)),
    );

    // text
    const text = textRef.current?.value || '';

    // 점수
    const score = +(selectScore || 0);

    // firebase insert
    await postReviewDocs({
      // 현재 포스트의 아이디를 넣어주자
      postId: '222',
      userId,
      date,
      images,
      text,
      score,
    });

    // 데이터 집어넣는 부분
    // restaurants.forEach(async (obj) => {
    //   await postRestaurantsDocs(obj);
    // });
  };

  // 리뷰 db에서 불러오기
  // const reviewLoad = () => {
  //   getReviewDocs().then((res) => {
  //     console.log(res);
  //   });
  // };

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
                id={'5'}
                posX={-1}
                posY={100}
              >
                맛있다
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton
                onClick={selectScoreHandler}
                id={'3'}
                posX={49}
                posY={100}
              >
                괜찮아요
              </ReviewScoreButton>
            </li>
            <li>
              <ReviewScoreButton
                onClick={selectScoreHandler}
                id={'1'}
                posX={98}
                posY={100}
              >
                별로
              </ReviewScoreButton>
            </li>
          </ReviewScoreGroup>
          <ReviewText
            ref={textRef}
            onInput={changeText}
            placeholder="주문하신 메뉴는 어떠셨나요? 식당의 분위기와 서비스도 궁금해요!"
          ></ReviewText>
        </ReviewContent>
        <ReviewSelectImgs>
          {fileImageSrc.map((file, idx) => {
            return (
              <ReviewSelectImg key={idx} data-id={file} img={file}>
                <ImgDelete>
                  <FontAwesomeIcon
                    onClick={deleteFileImage}
                    icon={faXmark}
                    color="white"
                  />
                </ImgDelete>
              </ReviewSelectImg>
            );
          })}
          <ReviewImg>
            <label htmlFor="file">
              <FontAwesomeIcon icon={faPlus} size="2x" color="lightgray" />
            </label>
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={saveFileImage}
              ref={fileRef}
            />
          </ReviewImg>
        </ReviewSelectImgs>

        <ButtonGroup>
          <Button background={theme.colors.white} color={theme.colors.gray300}>
            취소
          </Button>
          <Button
            background={theme.colors.gray500}
            color={theme.colors.white}
            // disabled
            forwardRef={disabledRef}
            clickEvent={craeteReview}
          >
            리뷰 올리기
          </Button>
        </ButtonGroup>
      </SortMiddel60>
    </Review>
  );
};

export default ReviewWrite;
