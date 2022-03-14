import SearchBox from '../search/SearchBox';
import mainBanner from '../../assets/main-banner/banner.jpg';
import { css, jsx } from '@emotion/react';

const banner = css`
  p {
    margin: 0;
    padidng: 0;
  }
  h1 {
    margin: 0;
    padidng: 0;
  }
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
  }
`;

const Banner = () => {
  return (
    <header css={banner}>
      <p className="banner__p">맛집과 술집을 한번에 찾는다</p>
      <h1 className="banner__title">먹대장</h1>
      <SearchBox></SearchBox>
    </header>
  );
};
export default Banner;
