import glassSolid from '@/assets/icons/glass-solid.svg';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import Portal from '@/components/Portal';
import {
  searchBar,
  modalSearchBar,
  SearchBarField,
  searchBar__contents,
  search__input,
  search__btn,
  position,
  findImgStyle,
  spanDisplay,
  none,
} from './SearchBox.styled';

const SearchBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    //fetchData
    console.log(inputValue);
  }, [inputValue]);

  const searchInput = useRef<any>(null);
  let navigate = useNavigate();

  const onClick = (e: any) => {
    if (!inputValue) {
      alert('검색어를 입력 해주세요!');
      e.preventDefault();
    }
  };

  const onKeyUp = (e: any) => {
    if (e.key === 'Enter' && !inputValue) {
      alert('검색어를 입력 해주세요!');
      setModalOpen(false);
      document.body.style.overflow = 'unset';
      return;
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      if (e.key === 'Escape') {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
        return;
      }
      if (inputValue) {
        console.log('Clicked key: ', e.key);
        navigate(`/search/${inputValue}`);
      } else {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
      }
    }
  };

  const onFocus = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const spanClear = () => {
    setInputValue('');
  };

  return (
    <div css={modalOpen ? modalSearchBar : searchBar}>
      <SearchBarField>
        <div css={searchBar__contents}>
          <div className="contents__left">
            <label htmlFor="search__input" />
            <span>
              <img css={findImgStyle} src={glassSolid} alt="glass-solid"></img>
            </span>
            <div css={position}>
              <input
                ref={searchInput}
                css={search__input}
                id="search__input"
                className="search__input"
                placeholder="지역, 식당 또는 음식"
                value={inputValue}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onChange={onChange}
              ></input>
              {modalOpen && (
                <SearchModal modalOpen={true} setModalOpen={setModalOpen} />
              )}
              {modalOpen && <Portal setModalOpen={setModalOpen}></Portal>}
            </div>
            <span css={modalOpen ? spanDisplay : none} onClick={spanClear}>
              <button>CLEAR</button>
            </span>
          </div>
          <div className="contents__right" onKeyUp={onKeyUp}>
            <Link
              css={search__btn}
              onClick={onClick}
              to={`/search${inputValue ? `/${inputValue}` : ''}`}
            >
              <button onClick={onClick} css={search__btn}>
                검색
              </button>
            </Link>
          </div>
        </div>
      </SearchBarField>
    </div>
  );
};

export default SearchBox;
