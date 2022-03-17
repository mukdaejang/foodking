import { css } from '@emotion/react';

export const ModalContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    position: absolute;
    right: 20px;
    top: 70px;
    width: 320px;
    height: 534px;

    box-sizing: border-box;
    background-color: white;
    z-index: 9998;

    > ul {
      display: flex;
      list-style: none;
      height: 50px;

      /* li {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: gray;
        cursor: pointer;
      } */
    }
    > div {
      height: 413px;
      border-top: 1px solid #dbdbdb;
      border-bottom: 1px solid #dbdbdb;

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
          color: gray;
          background-color: white;
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
        margin-right: 10px;
        box-sizing: border-box;

        section {
          display: flex;
          width: 320px;

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
                color: #ff792a;
              }
            }
            > span {
              font-size: 12px;
              margin-top: 5px;
            }
          }
          button {
            border: none;
            display: flex;
            color: gray;
            background-color: white;
            text-align: center;
            cursor: pointer;
            padding: 0;
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
        border: 2px solid #ff792a;
        border-radius: 50px;
        font-size: 16px;
        color: #ff7100;
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
