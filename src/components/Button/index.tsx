import { ButtonStyle } from './Button.styled';

interface ButtonChecker {
  children: string;
  background: string;
  color: string;
  disabled?: boolean;
  forwardRef?: any;
  clickEvent?: () => void;
}

const Button = ({
  children,
  background,
  color,
  disabled,
  forwardRef,
  clickEvent,
}: ButtonChecker) => {
  return (
    <ButtonStyle
      onClick={clickEvent}
      background={background}
      color={color}
      disabled={disabled}
      ref={forwardRef}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
