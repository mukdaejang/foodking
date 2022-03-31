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
import { useState, useRef, useEffect } from 'react';
import {
  postReviewDocs,
  postImage,
  getPostTitleDocs,
  postRestaurantsDocs,
  updateReview,
} from '@/firebase/request';
import { useAppSelector } from '@/store/hooks';
import { restaurants } from './obj';
import { useLocation, useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';
import { RestaurantLink } from '../RestaurantItem/restaurant.styled';

const ReviewWrite = () => {
  const userId = useAppSelector(({ auth }) => auth.status.uid);

  const [title, setTitle] = useState<string>();
  const [selectScore, setSelectScore] = useState(null);
  const [prevSelectScore, setPrevSelectScore] = useState(null);
  const disabledRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { pathname } = useLocation();
  const { state }: any = useLocation();
  const postId = pathname.replace(/(\/writeReview\/)?(\/editReview\/)?/, '');
  const action = pathname.replace(postId, '');

  const navigate = useNavigate();

  useEffect(() => {
    getPostTitleDocs(postId).then((res) => setTitle(res[0]));
  }, []);

  const selectScoreHandler = (e: any) => changeScore(e.currentTarget);

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
  const [fileImage, setFileImage] = useState<Blob[]>([]);
  const [fileImageSrc, setFileImageSrc] = useState<Array<Array<string>>>([]);

  // 파일 저장
  const saveFileImage = async (e: any) => {
    if (fileRef.current?.files) {
      // setFileImage([...fileImage, fileRef.current?.files[0]]);
      // setFileImageSrc([
      //   ...fileImageSrc,
      //   [
      //     URL.createObjectURL(fileRef.current?.files[0]),
      //     fileRef.current?.files[0].name,
      //   ],
      // ]);

      let file = fileRef.current?.files[0]; // 입력받은 file객체

      // 이미지 resize 옵션 설정 (최대 width을 100px로 지정)
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 300,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        setFileImage([...fileImage, compressedFile]);
        setFileImageSrc([
          ...fileImageSrc,
          [URL.createObjectURL(file), file.name],
        ]);
      } catch (error) {
        console.log(error);
      }

      e.target.value = '';
    }
  };

  // 파일 삭제
  const deleteFileImage = (e: any) => {
    const fileSrc = e.currentTarget.parentNode.parentNode.dataset.id;
    const fileName = e.currentTarget.parentNode.parentNode.dataset.name;

    setFileImageSrc(
      [...fileImageSrc].filter((file: any) => fileSrc !== file[0]),
    );
    setFileImage([...fileImage].filter((file: any) => fileName !== file.name));
    URL.revokeObjectURL(fileSrc);
  };

  const craeteReview = async () => {
    // 현재 시간
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    // 이미지
    const images = await Promise.all(
      fileImage.map(async (file) => await postImage(file, 'reviews')),
    );

    // text
    const text = textRef.current?.value || '';

    // 점수
    const score = +(selectScore || 0);

    // firebase insert
    await postReviewDocs({
      postId,
      userId,
      date,
      images,
      text,
      score,
    }).then((res) => navigate(-1));

    // 데이터 집어넣는 부분
    // restaurants.forEach(async (obj: any) => {
    //   await postRestaurantsDocs({ ...obj, images: [...images] });
    // });
  };

  const editReview = async () => {
    // 현재 시간
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}-${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    // 이미지
    const images = await Promise.all(
      fileImage.map(async (file) => await postImage(file, 'reviews')),
    );

    // text
    const text = textRef.current?.value || '';

    // 점수
    const score = +(selectScore || 0);

    const reviewId = state.reviewId || '';
    // firebase insert
    await updateReview(reviewId, {
      postId,
      userId,
      date,
      images,
      text,
      score,
    }).then((res) => navigate(-1));
  };

  return (
    <Review>
      <SortMiddel60>
        <RestaurantsTitle>{title}</RestaurantsTitle>
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
              <ReviewSelectImg
                key={idx}
                data-id={file[0]}
                data-name={file[1]}
                img={file[0]}
              >
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
          {action === '/editReview/' ? (
            <Button
              background={theme.colors.gray500}
              color={theme.colors.white}
              // disabled
              forwardRef={disabledRef}
              clickEvent={editReview}
            >
              리뷰 수정하기
            </Button>
          ) : (
            <Button
              background={theme.colors.gray500}
              color={theme.colors.white}
              // disabled
              forwardRef={disabledRef}
              clickEvent={craeteReview}
            >
              리뷰 올리기
            </Button>
          )}
        </ButtonGroup>
      </SortMiddel60>
    </Review>
  );
};

export default ReviewWrite;
