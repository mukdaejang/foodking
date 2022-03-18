import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonStyle } from './iconButton.styled';
import { textSpanContainsPosition } from 'typescript';

interface IconButtonType {
  event: (e: any) => void;
  img: string;
}

const IconButton = ({ event, img }: IconButtonType) => {
  return (
    <IconButtonStyle img={img} onClick={event}>
      <button></button>
      <span>가고싶다</span>
    </IconButtonStyle>
  );
};

export default IconButton;
