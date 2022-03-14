import food from '@/assets/food.jpeg';
import {
  categoryItem,
  categoryLink,
  categoryImg,
  categoryInfo,
  categoryName,
  categoryText,
} from './category_item.styled';

function CategoryItem() {
  return (
    <li css={categoryItem}>
      <a css={categoryLink} href="/">
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
