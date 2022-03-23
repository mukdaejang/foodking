import { Global, css } from '@emotion/react';

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;

const style = css`
  /* font - spoqa han sans */
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.eot') format('eot'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff') format('woff'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Medium.eot') format('eot'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Medium.woff') format('woff'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Medium') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.eot') format('eot'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff2') format('woff2'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff') format('woff'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Light') format('truetype');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 100;
    src: local('Spoqa Han Sans Thin'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.eot') format('eot'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.woff') format('woff'),
      url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin') format('truetype');
  }

  /* reset */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans', 'sans-serif';
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    cursor: pointer;
  }
`;
