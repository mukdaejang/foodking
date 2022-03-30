import SearchBox from '@/components/Search';
import { banner, SearchContainer } from './Banner.styled';

const Banner = () => {
  return (
    <header css={banner}>
      <p className="banner__p">맛집과 술집을 한번에 찾는다</p>
      <h1 className="banner__title">먹대장</h1>
      <div css={SearchContainer}>
        <SearchBox></SearchBox>
      </div>
    </header>
  );
};
export default Banner;
