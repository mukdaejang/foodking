<<<<<<< HEAD
import SearchBox from '../Search/SearchBox';
=======
import { FC } from 'react';
import SearchBox from '@/components/Search';
>>>>>>> 392c1a2c7961d0aa1d705e51fae32e14be7c8f9a
import { banner } from './Banner.styled';

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
