import { ButtonStyle } from './Button.styled';

interface ButtonChecker {
  children: string;
  background: string;
  color: string;
}

const Button = ({ children, background, color }: ButtonChecker) => {
  return (
    <ButtonStyle background={background} color={color}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
