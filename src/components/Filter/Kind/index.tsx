import {} from './Kind.styled';
import { Section, SubTitle } from '../Filter.styled';
import { Kind, Label, Span, Input, Img } from './Kind.styled';
import kor from '../../../assets/icons/kind-kor.svg';
import japan from '../../../assets/icons/kind-japan.svg';
import china from '../../../assets/icons/kind-china.svg';
import pizza from '../../../assets/icons/kind-pizza.svg';
import coffee from '../../../assets/icons/kind-coffee.svg';
import beer from '../../../assets/icons/kind-beer.svg';

const FoodKind = () => {
  const foodKind = ['한식', '일식', '중식', '양식', '카페', '주점'];
  const foodImg = ['kor', 'japan', 'china', 'pizza', 'coffee', 'beer'];
  return (
    <section css={Section}>
      <SubTitle>종류</SubTitle>
      <div css={Kind}>
        {foodKind.map((food, i) => {
          return (
            <li key={food}>
              <label htmlFor={food} css={Label}>
                {/* {console.log(`./icons/kind-${foodImg[i]}.svg`)} */}
                <img
                  // src={`${process.env.PUBLIC_URL}/icons/kind-${foodImg[i]}.svg`}
                  src={require(`../../../assets/icons/kind-${foodImg[i]}.svg`)}
                  alt={food}
                  css={Img}
                ></img>
              </label>
              <span css={Span}>{food}</span>
              <input id={food} value={food} type="checkbox" css={Input}></input>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default FoodKind;
