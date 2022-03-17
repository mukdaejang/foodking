import { ButtonStyle } from './Button.styled';

interface ButtonChecker {
  children: string;
  background: string;
  color: string;
  disabled?: boolean;
}

const Button = ({ children, background, color, disabled }: ButtonChecker) => {
  return (
    <ButtonStyle background={background} color={color} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
