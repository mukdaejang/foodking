import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CopyForm = styled.form`
  position: relative;
  width: 80%;
  height: 40px;
  margin: 20px auto;
`;

const CopyLink = styled.input`
  all: unset;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  border-radius: 20px;
  box-sizing: border-box;
`;

const CopyButton = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  line-height: 40px;
  text-align: center;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.orange};
  border: 1.5px solid ${({ theme }) => theme.colors.orange};
`;

const CopyButtonIcon = styled.i``;

export { CopyForm, CopyLink, CopyButton, CopyButtonIcon };
