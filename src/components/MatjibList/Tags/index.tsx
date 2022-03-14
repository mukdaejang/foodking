import { FC } from 'react';
import Tag from './Tag';

const tags: string[] = [
  '전체',
  '파스타',
  '무한리필',
  '이태원',
  '고기',
  '데이트',
  '강남',
  '홍대',
  '스테이크',
  '가로수길',
  '디저트',
];

const Tags: FC = () => {
  return (
    <p>
      {tags.map((tag) => (
        <Tag key={tag} content={tag} />
      ))}
    </p>
  );
};

export default Tags;
