import glassSolid from '@/assets/icons/glass-solid.svg';
import { useState, useEffect } from 'react';
import SearchModal from './SearchModal';
import {
  searchBar,
  modalSearchBar,
  searchBar__field,
  searchBar__contents,
  search__input,
  searh__btn,
  position,
  findImgStyle,
  spanDisplay,
  none,
} from './SearchBox.styled';
import Portal from '@/components/Portal';

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
      <fieldset css={searchBar__field}>
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
              tabIndex={1}
            >
              CLEAR
            </span>
          </div>
          <div
            className="contents__right"
            tabIndex={2}
            // onClick={onClick}
            onKeyUp={onKeyUp}
          >
            <input css={searh__btn} type="submit" value="검색"></input>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default SearchBox;
