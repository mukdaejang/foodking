import './category.css';
import { css } from '@emotion/react';
import { CategoryItem } from '@/components';

function Category() {
  const categoryContent = css`
    padding-top: 30px;
    padding-bottom: 40px;
  `;
  const categoryTitle = css`
    color: #ff792a;
    font-size: 1.5rem;
    font-weight: 700;
  `;
  const categoryList = css`
    display: block;
    overflow: hidden;
  `;

  return (
    <section css={categoryContent}>
      {/* <h2 css={categoryTitle}>{`믿고 보는 ${'맛집'} 리스트`}</h2> */}
      <ul css={categoryList}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </section>
  );
}

export default Category;
