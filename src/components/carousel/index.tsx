import { Category } from '@/components';
import { useState, useRef, useEffect } from 'react';
import {
  carousel,
  categoryTitle,
  carouselView,
  carouselItems,
  carouselControl,
  carouselControlPrev,
  carouselControlNext,
  navigationControl,
} from './carousel.styled';

const mockData = [
  {
    title: '강남역 맛집',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집2',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집3',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집4',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집5',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집6',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집7',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집8',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집9',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집10',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집11',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
  {
    title: '강남역 맛집12',
    subTitle: '강남역 점심은 여기서!',
    restaurants: ['청담돈까스', '담소', '백암 순대', '아이러브팝', '닭갈비집'],
  },
];

interface CarouselChecker {
  title: string;
}

type MockDataProps = {
  title: string;
  subTitle: string;
  restaurants: string[];
};
const Carousel = ({ title }: CarouselChecker) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const slideDotRef = useRef<HTMLUListElement>(null);

  const categoryComponent: any = [];
  let temp: any = [];

  mockData.forEach((category: MockDataProps) => {
    temp.push(category);
    if (temp.length === 6) {
      categoryComponent.push(temp);
      temp = [];
    }
  });
  if (temp.length) categoryComponent.push(temp);

  const TOTAL_SLIDES = categoryComponent.length - 1;

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
    if (slideDotRef.current) {
      const dots = slideDotRef.current.childNodes;
      dots.forEach(
        (dot) => ((dot as HTMLElement).style.backgroundColor = '#fff'),
      );
      (dots[currentSlide] as HTMLElement).style.backgroundColor = '#ff792a';
    }
  }, [currentSlide]);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(TOTAL_SLIDES);
    else setCurrentSlide(currentSlide - 1);
  };

  return (
    <section css={carousel}>
      <h2 css={categoryTitle}>{`믿고 보는 ${title} 리스트`}</h2>
      <div css={carouselView}>
        <ul css={carouselItems} ref={slideRef}>
          {categoryComponent.map((element: any, idx: any) => (
            <li key={idx}>
              <Category categoryItemList={element} />
            </li>
          ))}
        </ul>
      </div>
      <ul css={navigationControl} ref={slideDotRef}>
        {categoryComponent.map((_: any, idx: any) => (
          <li key={idx}></li>
        ))}
      </ul>
      <button
        css={[carouselControl, carouselControlPrev]}
        onClick={PrevSlide}
      ></button>
      <button
        css={[carouselControl, carouselControlNext]}
        onClick={NextSlide}
      ></button>
    </section>
  );
};

export default Carousel;
