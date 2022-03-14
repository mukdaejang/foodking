// import styled from '@emotion/styled';
import { Restaurants, Category, Carousel } from '@/components';

const Main = () => {
  return (
    <div>
      <Restaurants title={'평점이 높은 맛집'} />
      <Category />
      <Carousel />
    </div>
  );
};

export default Main;
