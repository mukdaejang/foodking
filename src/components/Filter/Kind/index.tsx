import React, { MouseEvent, KeyboardEvent, useCallback } from 'react';
import { Section, SubTitle } from '../Filter.styled';
import { Kind, Label, SelectedLabel, Span, Img } from './Kind.styled';
import a11yHidden from '@/styles/a11yHidden';

interface PropsType {
  kind: string[];
  setKind: React.Dispatch<React.SetStateAction<string[]>>;
}

const FoodKind = ({ kind, setKind }: PropsType) => {
  const foodKind = ['한식', '일식', '중식', '양식', '카페', '주점'];
  const foodImg = ['kor', 'japan', 'china', 'pizza', 'coffee', 'beer'];

  const setFoodKindState = useCallback(
    (foodKind: string) => {
      if (kind.includes(foodKind)) {
        let temp_kind = [...kind];
        temp_kind = temp_kind.filter((elem) => elem !== foodKind);
        setKind([...temp_kind]);
      } else {
        let set = new Set([...kind, foodKind]);
        foodKind && setKind([...(set as any)]);
      }
    },
    [kind, setKind],
  );

  const saveFoodKindToPropsState = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if ((e.target as HTMLLIElement).matches('input')) {
        let foodKind = (e.target as HTMLLIElement).getAttribute('value');
        foodKind && setFoodKindState(foodKind);
      }
    },
    [setFoodKindState],
  );

  const onKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        let foodKind = (e.target as HTMLElement).getAttribute('for');
        foodKind && setFoodKindState(foodKind);
      }
    },
    [setFoodKindState],
  );

  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      saveFoodKindToPropsState(e);
    },
    [saveFoodKindToPropsState],
  );

  return (
    <section css={Section}>
      <SubTitle>종류</SubTitle>
      <div css={Kind}>
        {foodKind.map((food, i) => {
          return (
            <li key={food} onClick={onClick}>
              <label
                htmlFor={food}
                css={kind.includes(food) ? SelectedLabel : Label}
                onKeyUp={onKeyUp}
                tabIndex={0}
              >
                <img
                  src={require(`../../../assets/icons/kind-${foodImg[i]}.svg`)}
                  alt={food}
                  css={Img}
                ></img>
              </label>
              <span css={Span}>{food}</span>
              <input
                id={food}
                value={food}
                type="checkbox"
                css={a11yHidden}
                tabIndex={-1}
              ></input>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default React.memo(FoodKind);
