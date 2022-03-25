import React, { MouseEvent } from 'react';
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

  const onClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLLIElement).matches('input')) {
      let foodKind = (e.target as HTMLLIElement).getAttribute('value');
      if (foodKind && kind.includes(foodKind)) {
        let temp_kind = [...kind];
        temp_kind = temp_kind.filter((elem) => elem !== foodKind);
        setKind([...temp_kind]);
      } else {
        let set = new Set([...kind, foodKind]);
        foodKind && setKind([...(set as any)]);
      }
      console.log(kind);
    }
    // if (Kind && local.includes(Kind)) {
    //   let temp = [...local];
    //   temp = temp.filter((e) => e !== Kind);
    //   setLocal([...temp]);
    // } else {
    //   let set = new Set([...local, Kind]);
    //   set && setLocal([...(set as any)]);
    // }
  };
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
              ></input>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default FoodKind;
