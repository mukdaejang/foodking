import SurroundPopular, { Restaurant } from './SurroundPopular';
import { Title } from '@/components/style';
import foodImage from '@/assets/img/food.jpg';

const restaurants: Restaurant[] = Array(5)
  .fill(null)
  .map((_, i) => ({
    id: i,
    name: '별궁식당',
    categories: ['한정식', '백반', '정통 한식'],
    locations: ['삼청', '인사'],
    price: '만원 미만',
    image: foodImage,
  }));

const SurroundPopluars = () => {
  return (
    <aside>
      <Title>주변 인기 식당</Title>
      <ul>
        {restaurants.map((restaurant) => (
          <SurroundPopular key={restaurant.id} {...restaurant} />
        ))}
      </ul>
    </aside>
  );
};

export default SurroundPopluars;
