import glassSolid from '@/assets/icons/glass-solid.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from './SearchModal';
import Portal from '@/components/Portal';
import {
  searchBar,
  modalSearchBar,
  SearchBarField,
  searchBar__contents,
  search__input,
  searh__btn,
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

  // const onClick = (e: MouseEvent) => {
  //   console.log('click event');
  // };

  const onKeyUp = (e: any) => {
    console.log(e.key);
    if (e.key === 'Enter' || e.key === 'Escape') setModalOpen(false);
  };

  const onFocus = () => {
    setModalOpen(true);
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
                css={search__input}
                id="search__input"
                className="search__input"
                placeholder="지역, 식당 또는 음식"
                value={inputValue}
                onClick={() => setModalOpen(true)}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onChange={onChange}
              ></input>
              {modalOpen && (
                <SearchModal modalOpen={true} setModalOpen={setModalOpen} />
              )}
              {modalOpen && <Portal setModalOpen={setModalOpen}></Portal>}
            </div>
            <span
              css={modalOpen ? spanDisplay : none}
              onClick={spanClear}
              // tabIndex={1}
            >
              CLEAR
            </span>
          </div>
          <div className="contents__right" onKeyUp={onKeyUp}>
            <Link to={`/search${inputValue ? `/${inputValue}` : ''}`}>
              {console.log(`/search${inputValue ? `/${inputValue}` : ''}`)}
              <input css={searh__btn} type="submit" value="검색"></input>
            </Link>
          </div>
        </div>
      </SearchBarField>
    </div>
  );
};

export default SearchBox;
