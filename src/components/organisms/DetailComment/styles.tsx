import styled from '@emotion/styled';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { css } from '@emotion/css';

export const LonglineTextArea = (longComment: string, onCangeLongComment: (e: any) => void) => {
  return (
    <TextareaAutosize
      className={css`
        width: 100%;
        padding: 10px;
        &:focus {
          outline: none;
        }
      `}
      minRows={10}
      placeholder=""
      value={longComment === 'You have no commnet for this book' ? '' : longComment}
      onChange={onCangeLongComment}
    />
  );
};

export const Description = styled.div`
  color: rgb(105, 105, 105);

  text-align: justify;
`;
