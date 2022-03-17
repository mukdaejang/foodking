import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ListProps {
  title: string;
  position: string;
  type: string;
  score: number;
}

const List = ({ title, position, type, score }: ListProps) => {
  return (
    <li>
      <section>
        <a href="/">
          <img src={foodImage} alt="food" />
        </a>
        <div>
          <a href="/">
            <h3>{title}</h3>
            <span>{score}</span>
          </a>
          <span>{`${position}-${type}`}</span>
        </div>
        <button>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </button>
      </section>
    </li>
  );
};

export default List;
