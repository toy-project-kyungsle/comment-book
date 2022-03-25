import { css } from '@emotion/react';
import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

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
  font-family: ${engFont};
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

const DetailPageTitle = css`
  margin: 0;
  margin-bottom: 20px;
  font-size: 22px;
  color: black;
`;

const DetailCommentLong = css`
  color: rgb(105, 105, 105);
`;

const DetailPageTopBtn = css`
  position: absolute;
  top: -5;
  right: 0;
  z-index: 5;
`;

export const SparaGraph = styled.p`
  font-family: ${korFont};
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
      case 'DetailTitle':
        return DetailPageTitle;
      case 'DetailCommentLong':
        return DetailCommentLong;
      case 'DetailPageTopBtn':
        return DetailPageTopBtn;
      default:
        return null;
    }
  }};
`;
