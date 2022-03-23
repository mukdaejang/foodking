import React from 'react';
import { useNavigate } from 'react-router-dom';
import { keywordStyle } from './SearchKeyword.styled';
import glassSolid from '@/assets/icons/glass-solid.svg';

interface PropType {
  suggest: string;
}

const SearchKeyword = ({ suggest }: PropType) => {
  const URLTEXT = suggest.replace(' ', '').trim();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/search/${URLTEXT}`);
  };
  const onKeyUp = (e: any) => {
    if (e.key === 'Escape') console.log('Escape');
  };
  return (
    <li css={keywordStyle} onClick={onClick} onKeyUp={onKeyUp}>
      <img src={glassSolid} alt="glass-solid"></img>
      <button>{suggest}</button>
    </li>
  );
};

export default SearchKeyword;
