import React from 'react';
import { useNavigate } from 'react-router-dom';
import { keywordStyle } from './SearchKeyword.styled';
import glassSolid from '@/assets/icons/glass-solid.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { modalActions } from '@/store/modal/modal-slice';

interface PropType {
  suggest: string;
}

const SearchKeyword = ({ suggest }: PropType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const URLTEXT = suggest.replace(/[ ]/gi, '');

  const handleSearchBackModal = () => {
    dispatch(modalActions.handleSearchBackModal());
  };

  const onClick = () => {
    handleSearchBackModal();
    navigate(`/search/${URLTEXT}`);
  };

  return (
    <li css={keywordStyle} onClick={onClick}>
      <img src={glassSolid} alt="glass-solid"></img>
      <button>{suggest}</button>
    </li>
  );
};

export default SearchKeyword;
