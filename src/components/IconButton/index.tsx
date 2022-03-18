import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonStyle } from './iconButton.styled';

interface IconButtonType {
  event: (e: any) => void;
}

const IconButton = ({ event }: IconButtonType) => {
  return (
    <IconButtonStyle onClick={event}>
      <button></button>
      <span>가고싶다</span>
    </IconButtonStyle>
  );
};

export default IconButton;
