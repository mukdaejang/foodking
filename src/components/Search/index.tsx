import {
  useState,
  useEffect,
  useRef,
  useCallback,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

import glassSolid from '@/assets/icons/glass-solid.svg';
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
import { saveKeywordsToLocalStorage } from '@/utils';

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
    // console.log(inputValue);
    // throttle 걸어서 일정 시간 이후 검색어 가져오기
  }, [inputValue]);

  const handleSearchBackModal = useCallback(() => {
    dispatch(modalActions.handleSearchBackModal());
  }, [dispatch]);

  const saveKeywordToRedux = useCallback(
    (inputValue: string) => {
      dispatch(keywordSuggestActions.handleSearchKeyword(inputValue));
    },
    [inputValue],
  );

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (inputValue) {
        saveKeywordToRedux(inputValue);
        saveKeywordsToLocalStorage(inputValue);
        handleSearchBackModal();

        navigate(`/search/${inputValue}`);
      } else {
        alert('검색어를 입력 해주세요!');
      }
    },
    [inputValue],
  );

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        (document.activeElement as HTMLElement).blur();
        setInputValue('');
        handleSearchBackModal();
        return;
      }
    },
    [inputValue],
  );

  const onFocus = useCallback(() => {
    setInputValue('');
    if (!isSearchBackModalOpen) handleSearchBackModal();
  }, [inputValue]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [inputValue],
  );

  const onSpanClear = useCallback(() => {
    setInputValue('');
    inputRef.current && inputRef.current.focus();
  }, [inputValue]);

  return (
    <section css={isSearchBackModalOpen ? ModalSearchBar : SearchBar}>
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
                  autoComplete="off"
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
    </section>
  );
};

export default SearchBox;
