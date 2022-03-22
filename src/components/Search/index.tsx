import glassSolid from '@/assets/icons/glass-solid.svg';
import {
  useState,
  useEffect,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import Portal from '@/components/Portal';

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

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const { isSearchBackModalOpen } = useAppSelector(({ modal }) => modal);
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    //fetchData
    console.log(inputValue);
  }, [inputValue]);

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

  const onKeyUp = (e: KeyboardEvent) => {
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSpanClear = () => {
    setInputValue('');
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
                  css={SearchInput}
                  id="SearchInput"
                  placeholder="지역, 식당 또는 음식"
                  onFocus={onFocus}
                  onKeyUp={onKeyUp}
                  onChange={onChange}
                ></input>
                {isSearchBackModalOpen && <SearchModal />}
              </div>
              <span
                css={isSearchBackModalOpen ? SpanDisplay : None}
                onClick={onSpanClear}
              >
                <button>CLEAR</button>
              </span>
            </div>
            <div className="contents__right">
              <button type="submit" css={SearchBtn}>
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
