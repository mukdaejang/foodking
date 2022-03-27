import glassSolid from '@/assets/icons/glass-solid.svg';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

import {
  SearchBar,
  ModalSearchBar,
  SearchBarField,
  SearchBarContents,
  SearchInput,
  SearchBtn,
  AbsolutePosition,
  findImgStyle,
  SpanDisplay,
  None,
} from './SearchBox.styled';

/** redux */
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';
import { keywordSuggestActions } from '@/store/searchkeyword/keyword-slice';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );

  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputValue);
    // throttle 걸어서 일정 시간 이후 검색어 가져오기
  }, [inputValue]);

  const handleSearchBackModal = useCallback(() => {
    dispatch(modalActions.handleSearchBackModal());
  }, [dispatch]);

  const KeywordSaveToRedux = (str: string) =>
    dispatch(keywordSuggestActions.handleKeywordSuggest(str));

  // dispatch(keywordSuggestActions.handleKeywordSuggest(inputValue));

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue) {
      KeywordSaveToRedux(inputValue);
      handleSearchBackModal();
      navigate(`/search/${inputValue}`);
    } else {
      alert('검색어를 입력 해주세요!');
    }
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      (document.activeElement as HTMLElement).blur();
      setInputValue('');
      handleSearchBackModal();
      return;
    }
  };

  const onFocus = () => {
    setInputValue('');
    if (!isSearchBackModalOpen) handleSearchBackModal();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSpanClear = () => {
    setInputValue('');
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div css={isSearchBackModalOpen ? ModalSearchBar : SearchBar}>
      <SearchBarField>
        <div css={SearchBarContents}>
          <form onSubmit={onSubmit}>
            <div className="contents__left">
              <label htmlFor="SearchInput" />
              <span>
                <img
                  css={findImgStyle}
                  src={glassSolid}
                  alt="glass-solid"
                ></img>
              </span>
              <div css={AbsolutePosition}>
                <input
                  ref={inputRef}
                  css={SearchInput}
                  id="SearchInput"
                  placeholder="지역, 식당 또는 음식"
                  value={inputValue}
                  onFocus={onFocus}
                  onKeyUp={onKeyUp}
                  onChange={onChange}
                ></input>
                {/* {isSearchBackModalOpen && <SearchModal />} */}
              </div>
              <span
                css={isSearchBackModalOpen ? SpanDisplay : None}
                onClick={onSpanClear}
              >
                <button type="reset" onClick={onSpanClear}>
                  CLEAR
                </button>
              </span>
            </div>
            <div className="contents__right">
              <button type="submit" css={SearchBtn} onClick={onSubmit}>
                검색
              </button>
            </div>
          </form>
          {isSearchBackModalOpen && <SearchModal />}
        </div>
      </SearchBarField>
    </div>
  );
};

export default SearchBox;
