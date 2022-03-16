import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { CopyForm, CopyLink, CopyButton } from './linkCopyButton.styled';

const LinkCopyButton = () => {
  const CopyButtonHandler = (e: any) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert('링크 복사 완료!');
      })
      .catch((e) => {
        alert('링크 복사 실패 - 다시 시도해주세요!');
      });
  };

  return (
    <CopyForm>
      <CopyLink type="text" disabled value={window.location.href} />
      <CopyButton onClick={CopyButtonHandler}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        <span>공유하기</span>
      </CopyButton>
    </CopyForm>
  );
};

export default LinkCopyButton;
