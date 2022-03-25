import { Category } from '@/components';
import { useState, useRef, useEffect } from 'react';
import {
  CarouselContent,
  CategoryTitle,
  CarouselView,
  CarouselItems,
  CarouselControl,
  NavigationControl,
} from './carousel.styled';
import { getFoodListDocs } from '@/firebase/request';

interface CarouselChecker {
  title: string;
}

export interface categoryDataType {
  title: string;
  id: string;
  description: string;
  list: string[];
}

const Carousel = ({ title }: CarouselChecker) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const slideDotRef = useRef<HTMLUListElement>(null);

  const [categoryComponent, setCategoryComponent] = useState<
    Array<categoryDataType[]>
  >([]);

  const [totalSlides, setTotalslides] = useState<number>(0);
  useEffect(() => {
    getFoodListDocs().then((res) => {
      setCategoryComponent(res);
      setTotalslides(res.length - 1);
    });
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  const NextSlide = () => {
    if (currentSlide >= totalSlides) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  const PrevSlide = () => {
    if (currentSlide === 0) setCurrentSlide(totalSlides);
    else setCurrentSlide(currentSlide - 1);
  };

  return (
    <CarouselContent>
      <CategoryTitle>{`믿고 보는 ${title} 리스트`}</CategoryTitle>
      <CarouselView>
        <CarouselItems ref={slideRef}>
          {categoryComponent.map(
            (category: categoryDataType[], idx: number) => (
              <Category key={idx} categoryItemList={category} />
            ),
          )}
        </CarouselItems>
      </CarouselView>
      <NavigationControl ref={slideDotRef} nowSlide={currentSlide}>
        {categoryComponent.map((_: any, idx: any) => (
          <li key={idx}></li>
        ))}
      </NavigationControl>
      <CarouselControl onClick={PrevSlide}></CarouselControl>
      <CarouselControl onClick={NextSlide}></CarouselControl>
    </CarouselContent>
  );
};

export default Carousel;
