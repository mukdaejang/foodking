import { css } from '@emotion/react';
import mainBanner from '@/assets/img/banner.jpg';

export const banner = css`
  width: 100vw;
  height: 500px;
  background: url(${mainBanner}) no-repeat;
  background-size: cover;

  margin: 0 auto;
  color: white;

  .banner__p {
    font-size: 40px;
    font-weight: 600;
    padding-top: 150px;
    text-align: center;
  }
  .banner__title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 60px;
  }
`;
