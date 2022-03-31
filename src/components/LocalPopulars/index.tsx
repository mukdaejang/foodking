import LocalPopular, { Restaurant } from './LocalPopular';
import { Title } from '@/components/style';
import foodImage from '@/assets/img/food.jpg';
import { useAppSelector } from '@/store/hooks';

// const restaurants: Restaurant[] = Array(5)
//   .fill(null)
//   .map((_, i) => ({
//     id: i,
//     name: '별궁식당',
//     categories: ['한정식', '백반', '정통 한식'],
//     locations: ['삼청', '인사'],
//     price: '만원 미만',
//     image: foodImage,
//   }));

const LocalPopluars = () => {
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);
  console.log(post);
  return (
    <aside>
      <Title>주변 인기 식당</Title>
      <ul>
        {post &&
          post?.localPops?.map((restaurant) => (
            <LocalPopular key={restaurant.id} {...restaurant} />
          ))}
      </ul>
    </aside>
  );
};

export default LocalPopluars;
