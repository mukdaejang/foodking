import { Routes, Route } from 'react-router-dom';
import { MatjibList, Main, NotFound } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="matjib_list" element={<MatjibList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
