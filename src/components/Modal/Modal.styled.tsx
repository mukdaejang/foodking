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

      li {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: gray;
        cursor: pointer;
      }
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

export const loginModalOpen = css`
  position: absolute;
  padding: 101px 52px 98px;
  border-radius: 10px;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  /* height: 70vh; */
  width: 360px;

  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
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

export const modalBackground = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9997;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const loginModalBackground = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const loginModalDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    button {
      width: 256px;
      height: 51px;
      font-size: 14px;
      line-height: 51px;
      border-radius: 48px;
      margin: 0 auto 12px;
      border: none;
    }
    button:nth-child(2) {
      color: #ffffff;
      background-color: #4150bf;
    }
    button:nth-child(3) {
      color: #ffffff;
      background-color: #000000;
    }
  }

  h2 {
    margin-bottom: 19px;
    font-size: 30px;
    line-height: 1;
    font-weight: 900;
    text-align: center;
  }

  p {
    margin-bottom: 30px;
    padding-bottom: 0;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #555;
    text-align: center;
  }
`;
export const closeBtn = css`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  color: gray;
  border: none;
  background-color: #fff;
`;
