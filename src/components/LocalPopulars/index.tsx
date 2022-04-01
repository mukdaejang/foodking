import LocalPopular from './LocalPopular';
import { Title } from '@/components/style';
import { useAppSelector } from '@/store/hooks';

const LocalPopluars = () => {
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);
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
