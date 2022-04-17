import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Header

const HeaderMain = css`
  font-family: 'eng1 font regular';
  margin: auto 0;
  color: #050505d3;
  font-size: 20px;
  text-decoration: none;
`;

const HeaderAuth = css`
  font-family: 'eng1 font regular';
  font-size: 15px;
  :hover {
    cursor: pointer;
    color: #aca7cb;
  }
`;

// Slider

const MybookImgComment = css`
  line-height: 300%;
`;

const MyBookImgRating = css`
  text-align: center;
`;

// Search

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

const SubmitForm = css`
  position: relative;
  top: -23px;
  color: #ff0000c7;
  margin: 0;
  margin-left: 96px;
`;

// Detail Page

const DetailPageTitle = css`
  margin: 0;
  margin-bottom: 20px;
  font-size: 22px;
  color: black;
`;

const DetailCommentLong = css`
  color: rgb(105, 105, 105);
`;

export const SparaGraph = styled.p`
  font-family: 'kor font regular';
  ${(props) => {
    switch (props['data-mode']) {
      case 'HeaderMain':
        return HeaderMain;
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
      case 'SubmitForm':
        return SubmitForm;
      case 'DetailTitle':
        return DetailPageTitle;
      case 'DetailCommentLong':
        return DetailCommentLong;
      default:
        return null;
    }
  }};
`;
