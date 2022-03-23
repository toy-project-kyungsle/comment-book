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
  line-height: 300%;
`;

const MyBookImgRating = css`
  text-align: center;
`;

const SearchRenderTitle = css`
  color: rgb(75, 75, 75);
  font-size: 14px;
  margin: 0;
`;

const SearchRenderInfo = css`
  color: #0000007b;
  font-size: 13px;
  margin: 0;
`;

export const SparaGraph = styled.p`
  font-family: 'Noto Sans KR', sans-serif;

  ${(props) => {
    switch (props['data-mode']) {
      case 'Footer':
        return Footer;
      case 'HeaderAuth':
        return HeaderAuth;
      case 'MybookImgComment':
        return MybookImgComment;
      case 'MyBookImgRating':
        return MyBookImgRating;
      case 'SearchRenderTitle':
        return SearchRenderTitle;
      case 'SearchRenderInfo':
        return SearchRenderInfo;
      default:
        return null;
    }
  }}
`;
