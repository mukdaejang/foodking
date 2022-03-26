import { Restaurants, Carousel, Banner } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { SortMiddel95 } from '@/components/style';

const Main = () => {
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  return (
    <div>
      <Banner />
      <SortMiddel95>
        <Carousel title={'맛집'} />
        <Carousel title={'술집'} />
        <Restaurants title={'맛집'} />
        <Restaurants title={'술집'} />
      </SortMiddel95>
    </div>
  );
};

export default Main;
