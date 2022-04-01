import { ReviewScore, ReviewScoreImg } from './reviewWrite.styled';

interface ReviewScoreButtonChecker {
  children: string;
  posX: number;
  posY: number;
  id?: string;
  onClick?: (e: any) => void;
}

export const ReviewScoreButton = ({
  children,
  posX,
  posY,
  id,
  onClick,
}: ReviewScoreButtonChecker) => {
  return (
    <ReviewScore onClick={onClick} id={id}>
      <ReviewScoreImg id={id} posX={posX} posY={posY}></ReviewScoreImg>
      {children}
    </ReviewScore>
  );
};
