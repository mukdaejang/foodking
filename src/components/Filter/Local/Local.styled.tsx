import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Province = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

interface PropsType {
  curCity: string;
  key: string;
}

// export const CityButton = styled.button<PropsType>`
//   display: inline-block;
//   background-color: #fff;
//   width: 150px;
//   font-size: 20px;
//   line-height: 59px;
//   text-align: center;
//   text-decoration: none;

//   border-bottom: ${({ curCity, key }) =>
//     curCity === key ? theme.borders.border1 : theme.borders.border0};
//   color: ${({ curCity, key }) =>
//     curCity === key ?  : theme.colors.gray300};
// `;

export const SelectedCityButton = css`
  display: inline-block;
  background-color: #fff;
  width: 150px;
  font-size: 20px;
  line-height: 59px;
  text-align: center;
  text-decoration: none;

  border-bottom: ${theme.borders.border1};
  color: ${theme.colors.orange};
`;

export const UnSelectedCityButton = css`
  display: inline-block;
  background-color: #fff;
  width: 150px;
  font-size: 20px;
  line-height: 59px;
  text-align: center;
  text-decoration: none;

  border-bottom: ${theme.borders.border0};
  color: ${theme.colors.gray300};
`;

export const City = css`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

/** 도시 클릭시 라벨 */
export const Label = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 50px;
  margin: 10px;
  color: ${theme.colors.gray300};
  border: ${theme.borders.border0};
  border-radius: ${theme.borders.radius};
`;

export const SelectedLabel = css`
  border: ${theme.borders.border1};
  border-radius: ${theme.borders.radius};
`;

/* 더보기 클릭시 */
export const ProvinceMoreUl = css`
  position: absolute;
  right: 0;
  top: 60px;
  padding: 20px;
  color: ${theme.colors.gray300};
  background-color: white;
  border: ${theme.borders.border0};
  font-size: 20px;
  li:hover {
    cursor: pointer;
  }
`;

export const ProvinceMoreList = css`
  color: ${theme.colors.gray300};
  padding: 5px 10px;
  font-size: 20px;
`;

export const None = css`
  display: none;
`;
