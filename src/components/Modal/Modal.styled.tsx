import { css } from '@emotion/react';

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
