import { Routes, Route } from 'react-router-dom';
import {
  MatjibList,
  Main,
  NotFound,
  Best5,
  SearchResult,
  Restaurants,
} from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="matjib_list" element={<MatjibList />} />
      <Route path="Search/:endpoint" element={<SearchResult />} />
      <Route path="bestRestaurants" element={<Best5 />} />
      <Route path="/restaurants/:restaurant" element={<Restaurants />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
