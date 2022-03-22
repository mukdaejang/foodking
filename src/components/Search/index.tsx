import glassSolid from '@/assets/icons/glass-solid.svg';
import { useState, useEffect, useRef, FormEvent } from 'react';
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
  None,
} from './SearchBox.styled';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    //fetchData
    console.log(inputValue);
  }, [inputValue]);

  const searchInput = useRef<any>(null);
  let navigate = useNavigate();

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (inputValue) {
      handleSearchBackModal();
      navigate(`/search/${inputValue}`);
    } else {
      alert('검색어를 입력 해주세요!');
    }
  };

  const onKeyUp = (e: any) => {
    if (e.key === 'Enter' && !inputValue) {
      alert('검색어를 입력 해주세요!');
      return;
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      if (e.key === 'Escape') {
        handleSearchBackModal();
        return;
      } else if (inputValue) {
        handleSearchBackModal();
        navigate(`/search/${inputValue}`);
      } else {
        alert('검색어를 입력 해주세요!');
      }
    }
  };

  const onFocus = () => {
    handleSearchBackModal();
  };

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const spanClear = () => {
    setInputValue('');
  };

  return (
    <div css={isSearchBackModalOpen ? modalSearchBar : searchBar}>
      <SearchBarField>
        <div css={searchBar__contents}>
          <form onSubmit={onSubmit}>
            <div className="contents__left">
              <label htmlFor="search__input" />
              <span>
                <img
                  css={findImgStyle}
                  src={glassSolid}
                  alt="glass-solid"
                ></img>
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
                {isSearchBackModalOpen && <SearchModal />}
              </div>
              <span
                css={isSearchBackModalOpen ? spanDisplay : None}
                onClick={spanClear}
              >
                <button>CLEAR</button>
              </span>
            </div>
            <div className="contents__right">
              <button type="submit" css={search__btn}>
                검색
              </button>
            </div>
          </form>
        </div>
      </SearchBarField>
    </div>
  );
};

export default SearchBox;
