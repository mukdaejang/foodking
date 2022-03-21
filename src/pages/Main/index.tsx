import { Restaurants, Carousel, Banner } from '@/components';
import { useAppSelector } from '@/store/hooks';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

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
