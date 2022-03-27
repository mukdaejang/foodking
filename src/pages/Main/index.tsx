import { Restaurants, Carousel, Banner } from '@/components';
import { useAppSelector } from '@/store/hooks';
import { SortMiddel95 } from '@/components/style';

/** firebase */
import { getKeywordData } from '@/firebase/api/searchkeyword';
import { PostsOther } from '@/firebase/type';

const Main = () => {
  const { inputSearchKeyword } = useAppSelector(
    ({ searchkeyword }) => searchkeyword,
  );
  const auth = useAppSelector(({ auth }) => auth.status);
  console.log(auth);

  console.log(inputSearchKeyword);

  // const callbackFetch = useCallback(async () => {
  //   const user = sessionStorage.getItem('id');
  //   const result = await fetchGetData();

  //   if (result) {
  //     console.log(result.tikzs);
  //     setData(result.tikzs.map((x) => Object.assign({}, x, { key: x.id })));
  //     setTotal(result.total);
  //     setStatus(null);
  //     setOrderKindStatus(false);
  //     setOrderWhatStatus(false);
  //   }
  // }, [fetchGetData, pageSize, currentPage, orderWhat, orderKind]);

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
