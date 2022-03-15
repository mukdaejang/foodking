import { useState, useEffect, useRef } from 'react';
import {
  CopyForm,
  CopyLink,
  CopyButton,
  CopyButtonIcon,
} from './linkCopyButton.styled';

const LinkCopyButton = () => {
  const nowUrl = window.location.href;
  console.log(nowUrl);

  return (
    <CopyForm>
      <CopyLink type="text" disabled value={window.location.href} />
      <CopyButton>
        <CopyButtonIcon />
        공유하기
      </CopyButton>
    </CopyForm>
  );
};

export default LinkCopyButton;
