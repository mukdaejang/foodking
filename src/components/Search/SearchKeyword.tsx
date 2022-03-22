import React from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import glassSolid from '@/assets/icons/glass-solid.svg';

const keywordStyle = css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 25px;
  img {
    opacity: 0.6;
    padding: 10px;
    box-sizing: content-box;
    margin-right: 10px;
    padding: 10px;
  }
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
  button {
    background-color: white;
  }
`;

interface KeywordPropsType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // setModalOpen: (state: boolean) => void;
  keyword: string;
}

const SearchKeyword = ({ keyword, setModalOpen }: KeywordPropsType) => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate(`/search/${keyword}`);
  };
  const onKeyUp = (e: any) => {
    console.log(e.key);
    if (e.key === 'Escape') setModalOpen(false);
  };
  return (
    <li css={keywordStyle} onClick={onClick} onKeyUp={onKeyUp}>
      <img src={glassSolid} alt="glass-solid"></img>
      <button>{keyword}</button>
    </li>
  );
};

export default SearchKeyword;
