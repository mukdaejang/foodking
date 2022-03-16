import Review from './Review';
import { Header } from './Review.styled';

const Reviews = () => {
  const reviews = Array(3)
    .fill(null)
    .map((_, i) => ({
      id: i,
    }));

  const filters = [
    {
      type: '전체',
      count: 14,
    },
    { type: '맛있다', count: 13 },
    {
      type: '괜찮다',
      count: 1,
    },
    {
      type: '별로',
      count: 0,
    },
  ];

  return (
    <section>
      <Header>
        <h2>
          <span>리뷰 </span>
          <span>(14)</span>
        </h2>
        <ul>
          {filters.map(({ type, count }) => (
            <li key={type}>
              {type} ({count})
            </li>
          ))}
        </ul>
      </Header>
      <ul>
        {reviews.map(({ id }) => (
          <Review key={id} />
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
