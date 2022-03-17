import { useState, useEffect } from 'react';
import foodImage from '@/assets/img/food.jpg';
import Modal from '@/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import SocialLogin from '../Modal/SocialLogin';
import {
  ModalContainer,
  isSelected,
  isNotSelected,
} from './ProfileIcon.styled';

type ProfileIconProps = {
  onClickToggleModal: () => void;
};

const ProfileIcon = ({ onClickToggleModal }: ProfileIconProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [isLiFirst, setisLiFirst] = useState(true);
  const [firstLiMockData, setFirstLiMockData] = useState([
    {
      title: '올레무스',
      position: '서대문구',
      type: '카페',
      score: 4.4,
    },
    {
      title: '바니프레소',
      position: '강남구',
      type: '카페',
      score: 1.2,
    },
    {
      title: '빽다방',
      position: '강남구',
      type: '카페',
      score: 4.9,
    },
  ]);
  const [secondLiMockData, setSecondLiMockData] = useState([
    {
      title: '담소순대국',
      position: '광진구',
      type: '한식',
      score: 4.6,
    },
    {
      title: '뚱보집',
      position: '강남구',
      type: '한식',
      score: 4.8,
    },
    {
      title: '서가앤쿡',
      position: '마포구',
      type: '양식',
      score: 3.9,
    },
  ]);

  // 빈 데이터 경우를 위한 테스트 코드
  useEffect(() => {
    setSecondLiMockData([]);
  }, []);

  const handleOpen = () => {
    setModalOpened(true);
  };

  const handleClose = () => {
    setModalOpened(false);
  };

  const handleBackClose = () => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  };

  const onLiClick = () => {
    setisLiFirst(!isLiFirst);
  };

  const deleteBtnClick = () => {
    setFirstLiMockData([]);
  };

  return (
    <ModalContainer>
      <Modal closePortal={handleBackClose}></Modal>
      <div>
        <ul>
          <li css={isLiFirst ? isSelected : isNotSelected} onClick={onLiClick}>
            최근 본 맛집
          </li>
          <li css={isLiFirst ? isNotSelected : isSelected} onClick={onLiClick}>
            가고싶다
          </li>
        </ul>
        <div>
          <div>
            <button onClick={onClickToggleModal}>창 닫기</button>
            {isLiFirst && (
              <button onClick={deleteBtnClick}>
                <FontAwesomeIcon icon={faXmark} />
                <span>모두 지우기</span>
              </button>
            )}
          </div>
          <ul>
            {isLiFirst ? (
              firstLiMockData.length ? (
                firstLiMockData.map(
                  ({ title, position, type, score }, index) => {
                    return (
                      <li key={index}>
                        <section>
                          <a href="/">
                            <img src={foodImage} alt="food" />
                          </a>
                          <div>
                            <a href="/">
                              <h3>{title}</h3>
                              <span>{score}</span>
                            </a>
                            <span>{`${position}-${type}`}</span>
                          </div>
                          <button>
                            <FontAwesomeIcon icon={faStar} size="2x" />
                          </button>
                        </section>
                      </li>
                    );
                  },
                )
              ) : (
                <div>
                  <span> 거기가 어디였지 ?</span>
                  <p> 내가 둘러 본 식당이 이 곳에 순서대로 기록됩니다.</p>
                </div>
              )
            ) : secondLiMockData.length ? (
              secondLiMockData.map(
                ({ title, position, type, score }, index) => {
                  return (
                    <li key={index}>
                      <section>
                        <a href="/">
                          <img src={foodImage} alt="food" />
                        </a>
                        <div>
                          <a href="/">
                            <h3>{title}</h3>
                            <span>{score}</span>
                          </a>
                          <span>{`${position}-${type}`}</span>
                        </div>
                        <button>
                          <FontAwesomeIcon icon={faStar} size="2x" />
                        </button>
                      </section>
                    </li>
                  );
                },
              )
            ) : (
              <div>
                <span> 격하게 가고싶다 ..</span>
                <p>
                  식당의 '별' 아이콘을 누르면 가고싶은 곳을 쉽게 저장할 수
                  있습니다.
                </p>
              </div>
            )}
          </ul>
        </div>
        <footer>
          {isLiFirst ? (
            <button onClick={handleOpen}>로그인</button>
          ) : (
            <button>내 정보</button>
          )}

          {modalOpened && (
            <Modal closePortal={handleClose}>
              <SocialLogin closePortal={handleClose}></SocialLogin>
            </Modal>
          )}
        </footer>
      </div>
    </ModalContainer>
  );
};

export default ProfileIcon;
