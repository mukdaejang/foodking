import { ButtonStyle } from './Button.styled';

interface ButtonChecker {
  children: string;
  background: string;
  color: string;
  disabled?: boolean;
  forwardRef?: any;
}

const Button = ({
  children,
  background,
  color,
  disabled,
  forwardRef,
}: ButtonChecker) => {
  return (
    <ButtonStyle
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
