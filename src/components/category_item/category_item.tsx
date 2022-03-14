import './category_item.css';
import { css } from '@emotion/react';
import food from '@/assets/food.jpeg';

function CategoryItem() {
  const categoryItem = css`
    float: left;
    position: relative;
    width: 33%;
    padding: 20px;
    box-sizing: border-box;
  `;
  const categoryLink = css``;
  const categoryImg = css`
    width: 100%;
    height: 100%;
  `;
  const categoryInfo = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 700;
    text-shadow: 6px 6px 16px rgb(0 0 0 / 90%);
  `;
  const categoryName = css`
    white-space: nowrap;
    font-size: 1.8rem;
    text-align: center;
  `;
  const categoryText = css`
    font-size: 1rem;
    margin-top: 12px;
    text-align: center;
  `;

  return (
    <li css={categoryItem}>
      <a css={categoryLink} href="javascript:void(0)">
        <figure>
          <img css={categoryImg} src={`${food}`} alt="food" />
          <figcaption css={categoryInfo}>
            <p css={categoryName}>{`${'카테고리 제목'}`}</p>
            <p
              css={categoryText}
            >{`"${'카테고리 서브 텍스트입니다다다다다다'}"`}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
}

export default CategoryItem;
