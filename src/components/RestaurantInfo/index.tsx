import { TitleHeader } from './RestaurantInfo.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantInfo = () => {
  const status = {
    view: 141982,
    write: 114,
    star: 3787,
  };
  return (
    <div>
      <TitleHeader status={status}>
        <div className="title">
          <div>
            <h1>북천</h1>
            <span>4.6</span>
          </div>
          <div>
            <button>리뷰쓰기</button>
            <button>가고싶다</button>
          </div>
        </div>
        <div>
          <span className="view">
            <FontAwesomeIcon icon={faEye} />
          </span>
          <span className="write">
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span className="star">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </TitleHeader>
    </div>
  );
};

export default RestaurantInfo;
