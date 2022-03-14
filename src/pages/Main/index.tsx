// import styled from '@emotion/styled';
import { Restaurants, Category, Carousel, Banner } from '@/components';

const Main = () => {
  return (
    <div>
      <Banner />
      <Restaurants title={'평점이 높은 맛집'} />
      <Carousel title={'맛집'} />
    </div>
  );
};

export default Main;
