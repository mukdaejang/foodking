import { Restaurants, Carousel, Banner } from '@/components';

const Main = () => {
  return (
    <div>
      <Banner />
      <Carousel title={'맛집'} />
      <Carousel title={'술집'} />
      <Restaurants title={'맛집'} />
      <Restaurants title={'술집'} />
    </div>
  );
};

export default Main;
