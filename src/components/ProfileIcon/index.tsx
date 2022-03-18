import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import List from './List';
import SocialLogin from '../Modal/SocialLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  ModalContainer,
  isSelected,
  isNotSelected,
} from './ProfileIcon.styled';
import { getPostDocs } from '@/firebase/request';
import { ListProps } from './List';

interface ProfileIconProps {
  onClickToggleModal: () => void;
}

const ProfileIcon = ({ onClickToggleModal }: ProfileIconProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [isLiFirst, setisLiFirst] = useState(true);
  const [firstLiMockData, setFirstLiMockData] = useState<any>([]);
  const [secondLiMockData, setSecondLiMockData] = useState([
    {
      name: '담소순대국',
      address: '광진구',
      category: '한식',
      score: 4.6,
    },
    {
      name: '뚱보집',
      address: '강남구',
      category: '한식',
      score: 4.8,
    },
    {
      name: '서가앤쿡',
      address: '마포구',
      category: '양식',
      score: 3.9,
    },
  ]);

  useEffect(() => {
    // setSecondLiMockData([]); // 가고싶다 서브메뉴에 빈 데이터가 들어가는 경우의 테스트 코드
    getPostDocs().then((res) => {
      setFirstLiMockData(res);
    });
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
                  (
                    { name, address, category, score }: ListProps,
                    index: number,
                  ) => {
                    return (
                      <List
                        key={index}
                        name={name}
                        address={address}
                        category={category}
                        score={score}
                      ></List>
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
                ({ name, address, category, score }, index) => {
                  return (
                    <List
                      key={index}
                      name={name}
                      address={address}
                      category={category}
                      score={score}
                    ></List>
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
