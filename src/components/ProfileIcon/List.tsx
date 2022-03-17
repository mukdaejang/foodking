import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ListProps {
  name: string;
  address: string;
  category: string;
  score: number;
}

const List = ({ name, address, category, score }: ListProps) => {
  return (
    <li>
      <section>
        <a href="/">
          <img src={foodImage} alt="food" />
        </a>
        <div>
          <a href="/">
            <h3>{name}</h3>
            <span>{score}</span>
          </a>
          <span>{`${address}-${category}`}</span>
        </div>
        <button>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </button>
      </section>
    </li>
  );
};

export default List;
