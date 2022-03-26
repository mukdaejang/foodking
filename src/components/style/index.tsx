import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.orange};
`;

export const SortMiddel95 = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 20px;
`;
export const SortMiddel70 = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
`;

export const SortMiddel60 = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 20px;
`;

export const GrayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.gray600};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
`;

export const ContainerTitle = styled.h3`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  text-align: center;
`;

export const ContainerText = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: 400;
  margin-top: 12px;
  text-align: center;
`;
