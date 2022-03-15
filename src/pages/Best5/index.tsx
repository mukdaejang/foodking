import { BestRestaurantItem, MoreButton } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { css } from '@emotion/react';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return (
    <div
      css={css`
        width: 70%;
        margin: 0 auto;
        padding: 20px;
      `}
    >
      <ul>
        <BestRestaurantItem />
        <BestRestaurantItem />
        <BestRestaurantItem />
      </ul>
      <MoreButton />
    </div>
  );
};

export default Main;
