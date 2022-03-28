import styled from '@emotion/styled';

const RestaurantsContent = styled.section`
  padding: 30px 0;
`;
const RestaurantsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.8rem;
  font-weight: 700;
`;
const RestaurantsList = styled.ul`
  display: block;
  overflow: hidden;
`;

export { RestaurantsContent, RestaurantsTitle, RestaurantsList };
