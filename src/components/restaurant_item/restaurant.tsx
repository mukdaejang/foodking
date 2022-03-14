import './restaurant.css';
import { css } from '@emotion/react';
import food from '@/assets/food.jpeg';

// const Restaurant = ({ href }) => {
const Restaurant = () => {
  const restaurantItem = css`
    float: left;
    width: 25%;
    padding: 20px;
    list-style: none;
    box-sizing: border-box;
  `;

  const restaurantLink = css`
    color: #000;
    text-decoration: none;
  `;

  const restaurantImg = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const restaurantInfo = css`
    margin-top: 6px;
  `;

  const restaurantName = css`
    font-size: 1.3rem;
  `;
  const restaurantScore = css`
    font-size: 1.3rem;
    color: #ff792a;
    margin-left: 5px;
  `;
  const restaurantSubInfo = css`
    margin-top: 6px;
    font-size: 0.9rem;
    color: #9b9b9b;
  `;

  return (
    <li css={restaurantItem}>
      <a css={restaurantLink} href="javascript:void(0)">
        <figure>
          <img css={restaurantImg} src={`${food}`} alt="food" />
          <figcaption css={restaurantInfo}>
            <p>
              <span css={restaurantName}>음식점 이름</span>
              <span css={restaurantScore}>4.5</span>
            </p>
            <p css={restaurantSubInfo}>{`${'지역'} - ${'음식종류'}`}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

Restaurant.defaultProps = {
  href: 'javascript:void(0)',
};

export default Restaurant;
