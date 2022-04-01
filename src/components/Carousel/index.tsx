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
import { CategoryType } from '@/firebase/type';

interface CarouselChecker {
  title: string;
}

const Carousel = ({ title }: CarouselChecker) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLUListElement>(null);
  const slideDotRef = useRef<HTMLUListElement>(null);

  const [categoryComponent, setCategoryComponent] = useState<
    Array<CategoryType[]>
  >([]);

  const [totalSlides, setTotalslides] = useState<number>(0);

  useEffect(() => {
    getFoodListDocs(title).then((res) => {
      let temp: any = [];
      const arrFoodListData = [];

      res.forEach((category) => {
        temp.push(category);
        if (temp.length === 6) {
          arrFoodListData.push(temp);
          temp = [];
        }
      });
      if (temp.length) arrFoodListData.push(temp);

      setCategoryComponent(arrFoodListData);
      setTotalslides(arrFoodListData.length - 1);
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
          {categoryComponent.length ? (
            categoryComponent.map((category: CategoryType[], idx: number) => (
              <Category key={idx} categoryItemList={category} cnt={3} />
            ))
          ) : (
            <Category cnt={3} />
          )}
        </CarouselItems>
      </CarouselView>
      <NavigationControl ref={slideDotRef} nowSlide={currentSlide}>
        {categoryComponent.map((_: any, idx: any) => (
          <li key={idx}></li>
        ))}
      </NavigationControl>
      <CarouselControl onClick={NextSlide}>next</CarouselControl>
      <CarouselControl onClick={PrevSlide}>prev</CarouselControl>
      {/* {categoryComponent.length ? (
        <div>
        </div>
      ) : (
        ''
      )} */}
    </CarouselContent>
  );
};

export default Carousel;
