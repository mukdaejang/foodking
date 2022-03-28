import styled from '@emotion/styled';

const IconButtonStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  & > button {
    all: unset;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
  }

  & > span {
    padding-top: 5px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray300};
    white-space: nowrap;
  }
`;

export { IconButtonStyle };
