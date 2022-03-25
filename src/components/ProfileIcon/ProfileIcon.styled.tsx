import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface modalContainerProps {
  scroll: number;
}

export const ModalContainer = styled.div<modalContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    position: absolute;
    right: 20px;
    top: ${({ scroll }) => `${scroll + 70}px`};
    width: 320px;
    height: 534px;

    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 9998;

    > ul {
      display: flex;
      list-style: none;
      height: 50px;
    }
    > div {
      height: 413px;
      border-top: 1px solid ${({ theme }) => theme.colors.gray500};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
      overflow-y: auto;

      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        margin-left: 16px;
        margin-right: 16px;
        font-size: 11px;

        button {
          border: none;
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.colors.gray500};
          background-color: ${({ theme }) => theme.colors.white};
          text-align: center;
          cursor: pointer;
          padding: 0;
        }

        span {
          margin-left: 5px;
        }
      }
      ul {
        list-style: none;
        width: 294px;
        height: 86px;
        margin-top: 16px;
        box-sizing: border-box;

        section {
          display: flex;
          width: 100%;

          img {
            width: 70px;
            height: 70px;
            margin-right: 16px;
            margin-left: 16px;
          }
          div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;

            a {
              display: flex;
              text-decoration: none;
              align-items: center;
              h3 {
                line-height: 22px;
                font-size: 16px;
                color: black;
              }

              span {
                line-height: 22px;
                margin-left: 5px;
                font-size: 16px;
                color: ${({ theme }) => theme.colors.orange};
              }
            }
            > span {
              font-size: 12px;
              margin-top: 5px;
            }
          }
          button {
            border: none;
            width: 40px;
            height: 28px;
            display: flex;
            background-color: ${({ theme }) => theme.colors.white};
            text-align: center;
            align-items: center;
            cursor: pointer;
            padding: 0;

            svg {
              width: 80%;
              height: 80%;
              margin-right: 5px;
            }

            .xIcon {
              width: 50%;
              height: 50%;
              color: ${({ theme }) => theme.colors.gray500};
            }
          }
        }

        > div {
          margin: 130px 16px 0 16px;
          text-align: center;
          width: 100%;
          > span {
            display: block;
            margin-bottom: 10px;
            font-size: 22px;
            line-height: 25px;
            color: ${({ theme }) => theme.colors.gray700};
          }

          > p {
            margin: 0 20px;
            font-size: 14px;
            line-height: 25px;
            color: ${({ theme }) => theme.colors.orange};
          }
        }
      }
    }
    footer {
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      padding: 10px 16px;

      button {
        width: 100%;
        height: 50px;
        border: 2px solid ${({ theme }) => theme.colors.orange};
        border-radius: 50px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.orange};
        background-color: transparent;
      }
    }
  }
`;

export const isSelected = css`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7100;
  border-bottom: 3px solid #ff7100;
  cursor: pointer;
`;

export const isNotSelected = css`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  cursor: pointer;
`;

export const loginButton = css`
  width: 100%;
  height: 50px;
  border: 2px solid #ff792a;
  border-radius: 50px;
  font-size: 16px;
  color: #ff7100;
  background-color: transparent;
`;
