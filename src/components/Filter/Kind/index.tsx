import {} from './Kind.styled';
import { Section, SubTitle } from '../Filter.styled';
import { Kind, Label, Span, Img } from './Kind.styled';
import a11yHidden from '@/styles/a11yHidden';
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
