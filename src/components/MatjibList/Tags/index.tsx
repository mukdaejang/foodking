import { Tag, TagBox } from './Tag';

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

const Tags = () => {
  return (
    <TagBox>
      {tags.map((tag) => (
        <Tag key={tag} content={tag} />
      ))}
    </TagBox>
  );
};

export default Tags;
