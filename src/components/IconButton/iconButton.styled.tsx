import styled from '@emotion/styled';
import unstar from '@/assets/icons/un-star.svg';

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
    padding: 7px;
    width: 30px;
    height: 30px;
    background: url('${unstar}') no-repeat center center / cover;
  }

  & > span {
    padding-top: 5px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.gray300};
    white-space: nowrap;
  }
`;

export { IconButtonStyle };
