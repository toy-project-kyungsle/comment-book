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

const MyInfoTBtitle = css`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #000000d3;
  font-weight: bold;
`;

const MyInfoTBhello = css`
  font-size: 14px;
  color: #0000007b;
  margin: 0;
  margin-bottom: 8px;
`;

const MyInfoTBguide = css`
  font-size: 14px;
  color: #0000007b;
  line-height: 36px;
  margin: 0;
`;

const SubmitForm = css`
  position: relative;
  top: -23px;
  color: #ff0000c7;
  margin: 0;
  margin-left: 96px;
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
      case 'MyInfo TB title':
        return MyInfoTBtitle;
      case 'MyInfo TB hello':
        return MyInfoTBhello;
      case 'MyInfo TB guide':
        return MyInfoTBguide;
      case 'SubmitForm':
        return SubmitForm;
      default:
        return null;
    }
  }}
`;
