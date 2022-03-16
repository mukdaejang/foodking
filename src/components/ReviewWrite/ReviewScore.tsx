import { useState, useEffect } from 'react';
import theme from '@/styles/theme';
import { ReviewScore, ReviewScoreImg } from './reviewWrite.styled';

interface ReviewScoreButtonChecker {
  children: string;
  posX: number;
  posY: number;
}

export const ReviewScoreButton = ({
  children,
  posX,
  posY,
}: ReviewScoreButtonChecker) => {
  const [selectScore, setSelectScore] = useState({
    good: false,
    middle: false,
    bad: false,
  });

  useEffect(() => {}, [setSelectScore]);

  const changeScore = (e: any) => {
    if (!selectScore.bad) {
      setSelectScore({ ...selectScore, bad: true });
      // console.log(theme.colors.orange);
      (e.currentTarget as HTMLElement).style.color = `"${theme.colors.orange}"`;
    } else {
      setSelectScore({ ...selectScore, bad: false });
      // console.log(theme.colors.gray300);
      e.currentTarget.style.color = `"${theme.colors.gray300}"`;
      (
        e.currentTarget.children[0] as HTMLElement
      ).style.transform = `translateY(0)`;
    }
  };

  return (
    <ReviewScore onClick={changeScore}>
      <ReviewScoreImg posX={posX} posY={posY}></ReviewScoreImg>
      {children}
    </ReviewScore>
  );
};
