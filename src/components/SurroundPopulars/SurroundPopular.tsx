import { StyledLi, CategoryTitle } from './SurroundPopular.styled';

export interface Restaurant {
  id: number;
  name: string;
  categories: string[];
  locations: string[];
  price: string;
  image: string;
}

const SurroundPopular = ({
  name,
  categories,
  locations,
  price,
  image,
}: Restaurant) => {
  return (
    <StyledLi>
      <img src={image} alt={name}></img>
      <div>
        <div>{name}</div>
        <div>
          <CategoryTitle>음식 종류:</CategoryTitle>{' '}
          {categories.map((category, i) => (i ? ` / ${category}` : category))}
        </div>
        <div>
          <CategoryTitle>위치:</CategoryTitle>{' '}
          {locations.map((location, i) => (i ? `/${location}` : location))}
        </div>
        <div>
          <CategoryTitle>가격대:</CategoryTitle> {price}
        </div>
      </div>
    </StyledLi>
  );
};

export default SurroundPopular;
