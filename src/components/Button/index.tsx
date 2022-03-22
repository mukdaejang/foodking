import { ButtonStyle } from './Button.styled';

interface ButtonChecker {
  children: string;
  background: string;
  color: string;
  disabled?: boolean;
  forwardRef?: any;
  event?: () => void;
}

const Button = ({
  children,
  background,
  color,
  disabled,
  forwardRef,
  event,
}: ButtonChecker) => {
  return (
    <ButtonStyle
      onClick={event}
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
