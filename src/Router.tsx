import { Routes, Route } from 'react-router-dom';
import { MatjibList, Main, NotFound, Best5 } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="matjib_list" element={<MatjibList />} />
      <Route path="*" element={<NotFound />} />
      <Route path="bestRestaurants" element={<Best5 />} />
    </Routes>
  );
};

export default Router;
