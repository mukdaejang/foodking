import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { Star } from '@/components/IconButton';
import theme from '@/styles/theme';
import { useAppSelector } from '@/store/hooks';

import foodImage from '@/assets/img/food.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface ListProps {
  id: string;
  name: string;
  address: string;
  category: string;
  score: number;
  deleteOneRecentlyWatched: (arg0: string) => void;
}

const List = ({
  id,
  name,
  address,
  category,
  score,
  deleteOneRecentlyWatched,
}: ListProps) => {
  const { isUserLogin } = useAppSelector(({ user }) => user);
  const [starState, setStarState] = useState(false);

  const changeStar = (e: MouseEvent) => {
    if (isUserLogin) {
      setStarState(!starState);
    } else {
      alert('로그인한 사용자만 사용할 수 있는 기능입니다.');
    }
  };

  const deleteRecentPosts = () => {
    let watchedArray: any = localStorage.getItem('watched');
    watchedArray = JSON.parse(watchedArray);
    const newWatchedArr = watchedArray.filter((item: string) => item !== id);
    localStorage.setItem('watched', JSON.stringify(newWatchedArr));
  };

  return (
    <li>
      <section>
        <Link to={`/restaurants/${id}`}>
          <img src={foodImage} alt="food" />
        </Link>
        <div>
          <Link to={`/restaurants/${id}`}>
            <h3>{name}</h3>
            <span>{score}</span>
          </Link>
          <span>{`${category}`}</span>
        </div>
        <button>
          <Star
            fill={theme.colors[starState ? 'orange' : 'gray1000']}
            onClick={changeStar}
          />
          <FontAwesomeIcon
            className="xIcon"
            icon={faXmark}
            onClick={() => {
              deleteRecentPosts();
              deleteOneRecentlyWatched(id);
            }}
          />
        </button>
      </section>
    </li>
  );
};

export default List;
