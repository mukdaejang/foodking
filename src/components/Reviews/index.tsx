import { useMemo } from 'react';
import Review from './Review';
import { Header } from './Review.styled';
import { useAppSelector } from '@/store/hooks';
import { Review as ReviewType } from '@/firebase/type';

const calcReviewCount = (reviews: ReviewType[], reviewScore: number) =>
  reviews.filter(({ score }) => score === reviewScore).length;

const Reviews = () => {
  const { data: post } = useAppSelector(({ restaurant }) => restaurant.post);

  const reviewCounts = useMemo(
    () => [
      {
        type: '전체',
        count: post?.reviews?.length,
      },
      { type: '맛있다', count: calcReviewCount(post?.reviews!, 5) },
      {
        type: '괜찮다',
        count: calcReviewCount(post?.reviews!, 3),
      },
      {
        type: '별로',
        count: calcReviewCount(post?.reviews!, 1),
      },
    ],
    [post?.reviews?.length],
  );

  return (
    <section>
      <Header>
        <h2>
          <span>리뷰 </span>
          <span>({post?.reviews?.length})</span>
        </h2>
        <ul>
          {reviewCounts.map(({ type, count }) => (
            <li key={type}>
              {type} ({count})
            </li>
          ))}
        </ul>
      </Header>
      <ul>
        {post?.reviews?.map((review) => (
          <Review key={review.date} {...review} />
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
