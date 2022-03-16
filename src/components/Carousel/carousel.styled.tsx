import styled from '@emotion/styled';
import arrow from '@/assets/arrow.png';

const CarouselContent = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 30px 0;
`;
const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.5rem;
  font-weight: 700;
`;
const CarouselView = styled.div`
  overflow: hidden;
  margin: 0 50px;
`;
const CarouselItems = styled.ul`
  display: flex;
  white-space: nowrap;

  & > li {
    display: inline-block;
    flex-shrink: 0;
    width: 100%;
  }
`;
const CarouselControl = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5rem;
  width: 20px;
  height: 80px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  z-index: 99;
  background: url('${arrow}') no-repeat center center / cover;

  &:focus {
    outline: none;
  }

  &:first-of-type {
    left: 15px;
    background-position: -20px 0;
  }
  &:last-of-type {
    right: 15px;
    background-position: -40px 0;
  }
`;
// const CarouselControlPrev = styled.button`
//   left: 15px;
//   background-position: -20px 0;
// `;
// const CarouselControlNext = styled.button`
//   background-position: -40px 0;
//   right: 15px;
// `;
const NavigationControl = styled.ul`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  & li {
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    cursor: pointer;
  }
`;
export {
  CarouselContent,
  CategoryTitle,
  CarouselView,
  CarouselItems,
  CarouselControl,
  // CarouselControlPrev,
  // CarouselControlNext,
  NavigationControl,
};
