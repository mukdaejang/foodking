import styled from '@emotion/styled';
import { MatjibListTags } from '@/components';

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.orange};
`;

const MatjipList = () => {
  return (
    <div>
      <Title>믿고 보는 맛집 리스트</Title>
      <MatjibListTags />
    </div>
  );
};

export default MatjipList;
