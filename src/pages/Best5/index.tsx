import { BestRestaurantItem } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { css } from '@emotion/react';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return (
    <div>
      <ul
        css={css`
          width: 70%;
          margin: 0 auto;
          padding: 20px;
        `}
      >
        <li
          css={css`
            width: 100%;
            border: 1px solid gray;
            padding: 20px;
          `}
        >
          <BestRestaurantItem />
        </li>
      </ul>
    </div>
  );
};

export default Main;
