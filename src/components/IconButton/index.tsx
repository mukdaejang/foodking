import { FC, MouseEvent } from 'react';
import { IconButtonStyle } from './iconButton.styled';

interface IconButtonType {
  onClick: (e: MouseEvent) => void;
  message: string;
}

const IconButton: FC<IconButtonType> = ({ onClick, message, children }) => {
  return (
    <IconButtonStyle onClick={onClick}>
      <button>{children}</button>
      <span>{message}</span>
    </IconButtonStyle>
  );
};

export default IconButton;
export { default as Pen } from './Pen';
export { default as Star } from './Star';
