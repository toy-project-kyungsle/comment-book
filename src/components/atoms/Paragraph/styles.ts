import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Footer = css`
  font-size: 14px;
  color: grey;
  margin: 0;
  text-align: end;
`;

const HeaderAuth = css`
  font-size: 15px;
  :hover {
    cursor: pointer;
    color: #aca7cb;
  }
`;

const MybookImgComment = css`
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 300%;
`;

const MyBookImgRating = css`
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
`;

export const SparaGraph = styled.p`
  ${(props) =>
    props['data-mode'] === 'Footer'
      ? Footer
      : props['data-mode'] === 'HeaderAuth'
      ? HeaderAuth
      : props['data-mode'] === 'MybookImgComment'
      ? MybookImgComment
      : props['data-mode'] === 'MyBookImgRating'
      ? MyBookImgRating
      : null}
`;
