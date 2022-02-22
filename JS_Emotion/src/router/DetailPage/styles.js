/** @jsx jsx */
import styled from '@emotion/styled';
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { css } from '@emotion/css';

export const Background = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;

  width: 800px;

  display: flex;
  flex-direction: row;

  font-family: 'Noto Sans KR', sans-serif;

  .topBtn {
    position: absolute;
    top: -5;
    right: 0;
    z-index: 5;

    & img {
      width: 15px;
    }

    & img:hover {
      cursor: pointer;
    }
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);

  & a {
    position: absolute;
    left: 0;
    bottom: -20;
    text-decoration: none;
    font-size: 12px;
    color: rgb(105, 105, 105);
    width: 60px;
  }
  & a:hover {
    color: black;
  }
`;

export const Letters = styled.div`
  width: 100%;
  margin-left: 70px;

  .title {
    margin: 0;
    margin-bottom: 20px;

    & p {
      margin: 0;
      font-size: 22px;
      color: black;
    }
  }

  .infoDiv {
    color: rgb(105, 105, 105);

    margin: 7px 0;

    .rtcomment {
      font-size: 12px;
      margin-left: 10px;
    }
  }

  .tagName {
    margin-right: 65px;
  }

  & hr {
    margin: 20px 0;
    border: 2px solid rgb(230, 230, 230);
  }

  .longComment {
    color: rgb(105, 105, 105);
  }
`;

export const RatingTextArea = styled.textarea`
  resize: none;
  vertical-align: middle;

  width: 50px;
  height: 25px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const OnelineTextArea = styled.textarea`
  resize: none;
  vertical-align: middle;

  width: 420px;
  height: 55px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const LonglineTextArea = (longComment, onCangeLongComment) => {
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

// export { TextareaAutosize };

export const Description = styled.div`
  color: rgb(105, 105, 105);

  text-align: justify;
`;

export const BtnDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: -10;

  color: rgb(105, 105, 105);
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;

  & span {
    margin-left: 20px;
  }

  & span:hover {
    cursor: pointer;
  }
`;
