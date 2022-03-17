import styled from '@emotion/styled';
import face from '@/assets/icons/face-icon.png';

const Review = styled.section`
  padding-top: 50px;
  width: 100%;
  height: 80vh;
`;

const RestaurantsTitle = styled.h3`
  display: inline;
  margin: 20px 0;
  padding-right: 5px;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.orange};
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray100};
`;

const ReviewContent = styled.div`
  position: relative;
  margin: 20px 0;
  padding: 15px;
  width: 100%;
  height: 25vh;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
`;

const ReviewScoreGroup = styled.ul`
  display: flex;
  /* position: absolute; */
`;

const ReviewScore = styled.button`
  all: unset;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray300};
`;

const ReviewScoreImg = styled.i<{ posX: number; posY: number }>`
  width: 36px;
  height: 36px;
  margin-right: 5px;
  background: url('${face}');
  background-repeat: no-repeat;
  background-size: 300% 200%;
  background-position: ${(props) => props.posX}% ${(props) => props.posY}%;
  /* -1, 49, 98 */
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
`;

const ReviewImg = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;

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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  margin: 20px 0;
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
  ReviewScoreImg,
  ReviewText,
  ReviewImg,
  ButtonGroup,
};
