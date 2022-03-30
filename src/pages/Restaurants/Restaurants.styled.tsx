import { css } from '@emotion/react';

export const imageContainer = css`
  margin: 0 0.4rem;
`;

export const mainContent = css`
  display: flex;
  padding: 0.4rem;

  .main-content {
    flex-grow: 1;
    padding: 0 50px;
    margin-top: 3rem;
  }

  aside {
    margin-top: 2rem;

    .mapXIcon {
      position: absolute;
      top: 10%;
      right: 10%;
      transform: translate(0, -110%);
      z-index: 100000;
      cursor: pointer;
      color: white;
    }
  }
`;
