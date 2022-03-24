import { css } from '@emotion/react';
import styled from '@emotion/styled';

const a11yHidden = css`
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
`;
export default a11yHidden;
