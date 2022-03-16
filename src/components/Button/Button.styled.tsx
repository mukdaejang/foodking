import styled from '@emotion/styled';

export const ButtonStyle = styled.button<{ background: string }>`
  font-size: 0.9rem;
  padding: 10px;
  width: 120px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;

  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
`;
