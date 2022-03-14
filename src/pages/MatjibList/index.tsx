import { FC } from 'react';
import styled from '@emotion/styled';
import { MatjibListTags, Footer } from '@/components';

const Title: FC = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.orange};
`;

const MatjipList: FC = () => {
  return (
    <div>
      {/* <Title>믿고 보는 맛집 리스트</Title>
      <MatjibListTags /> */}
      <Footer />
    </div>
  );
};

export default MatjipList;
