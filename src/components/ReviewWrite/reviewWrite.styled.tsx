import styled from '@emotion/styled';

const Review = styled.section`
  padding-top: 50px;
  width: 100%;
  height: 80vh;
`;

const RestaurantsTitle = styled.h3`
  display: inline;
  margin: 20px 0;
  padding-right: 5px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.orange};
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
`;

const ReviewContent = styled.div`
  position: relative;
  margin: 30px 0;
  padding: 15px;
  width: 100%;
  height: 30vh;

  border: 1px solid ${({ theme }) => theme.colors.gray500};
  /* all: unset;
  background-color: ${({ theme }) => theme.colors.white}; */
`;

const ReviewScoreGroup = styled.ul`
  display: flex;
  /* position: absolute; */
`;

const ReviewScore = styled.button`
  all: unset;
  padding: 5px 20px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
const ReviewText = styled.textarea`
  all: unset;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray500};
`;

const ReviewImg = styled.div`
  width: 100px;
  height: 100px;

  & > input {
    overflow: hidden;
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  & > label {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray500};

    &::after {
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: black;
      transform: translate(-50%, -50%);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

export {
  Review,
  RestaurantsTitle,
  SubTitle,
  ReviewContent,
  ReviewScoreGroup,
  ReviewScore,
  ReviewText,
  ReviewImg,
  ButtonGroup,
};
