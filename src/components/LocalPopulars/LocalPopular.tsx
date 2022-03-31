import { Link } from 'react-router-dom';
import { StyledLi, CategoryTitle } from './LocalPopular.styled';
import { Posts } from '@/firebase/type';

const LocalPopular = ({
  id,
  name,
  category,
  address,
  images,
  score,
}: Posts) => (
  <Link to={`/restaurants/${id}`}>
    <StyledLi>
      {images?.length ? <img src={images[0]?.src} alt={name}></img> : ''}
      <div>
        <div>
          <span>{name} </span>
          <span className="orange">{score}</span>
        </div>
        <div>
          <CategoryTitle>음식 종류:</CategoryTitle> {category}
        </div>
        <div>
          <CategoryTitle>위치:</CategoryTitle> {address?.district}
        </div>
      </div>
    </StyledLi>
  </Link>
);

export default LocalPopular;
