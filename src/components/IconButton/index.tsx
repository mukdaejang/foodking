import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonStyle } from './iconButton.styled';
import { textSpanContainsPosition } from 'typescript';

interface IconButtonType {
  event: (e: any) => void;
  img: string;
  children: string;
}

const IconButton = ({ children, event, img }: IconButtonType) => {
  return (
    <IconButtonStyle img={img} onClick={event}>
      <button></button>
      <span>{children}</span>
    </IconButtonStyle>
  );
};

export default IconButton;
