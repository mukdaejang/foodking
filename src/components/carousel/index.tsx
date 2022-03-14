import { Category } from '@/components';

import {
  carousel,
  categoryTitle,
  carouselItems,
  carouselControl,
  carouselControlPrev,
  carouselControlNext,
  carouselSelect,
  navigationControl,
} from './carousel.styled';

interface CarouselChecker {
  title: string;
}

const Carousel = ({ title }: CarouselChecker) => {
  return (
    <section css={carousel}>
      <h2 css={categoryTitle}>{`믿고 보는 ${title} 리스트`}</h2>
      <ul css={carouselItems}>
        <li>
          <Category />
        </li>
      </ul>
      <button css={[carouselControl, carouselControlPrev]}></button>
      <button css={[carouselControl, carouselControlNext]}></button>
      <ul css={navigationControl}>
        <li css={carouselSelect}></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Carousel;
