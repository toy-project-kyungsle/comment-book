import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { engFont1, korFont } from '@utils/objects/fonts';

const Loading = css`
  font-family: ${engFont1};
  font-weight: 800;
  font-size: 40px;
`;

const MainSearch = css`
  font-family: ${engFont1};
  font-size: 22px;
  font-weight: bold;
`;

// Slider

const SliderTopToggle = css`
  font-family: ${engFont1};
  margin-left: 20px;
  color: #0000007b;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

const SliderTopTitle = css`
  font-family: ${engFont1};
  font-size: 20px;
`;

// MyInfo

const MyInfoIBTitle = css`
  font-family: ${engFont1};

  font-size: 16px;

  font-weight: 800;
  color: #0000007b;
`;

const MyInfoIBInfo = css`
  font-family: ${korFont};

  font-size: 14px;
  color: #3e4756;
  float: right;
`;

// Auth

const AuthGuide = css`
  font-family: ${korFont};
  font-size: 14px;
`;

const AuthToggle = css`
  font-family: ${engFont1};
  margin-left: 10px;
  color: #2980b9;
  :hover {
    cursor: pointer;
  }
`;

// DetailPage

const DetailPage = css`
  color: rgb(105, 105, 105);
`;

const DetailPageFirst = css`
  ${DetailPage}
  font-family: ${korFont};
  margin-right: 65px;
`;

const DetailPageSecond = css`
  ${DetailPage}
  font-family: ${korFont};
`;

const DetailPageRtnComment = css`
  font-family: ${korFont};
  font-size: 12px;
  margin-left: 10px;
`;

const DetailComment = css`
  font-family: ${korFont};
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const SearchFirst = css`
  background-image: linear-gradient(to right, #74869d 0, #74869d 100%);
  background-repeat: no-repeat;
  transition: background 0.5s;
  color: white;

  padding: 0 4px;

  animation: underLine 1s;

  @keyframes underLine {
    from {
      color: #3e4756;
      background-size: 0%;
      background-position: 0 1.2em;
    }
    to {
      color: white;
      background-size: 100%;
      background-position: 0 0em;
    }
  }
`;

const SearchClickDivFirst = css`
  font-family: ${engFont1};
  margin-right: 10px;
`;

export const Sspan = styled.span`
  display: ${(props) => (props['data-visibility'] ? 'inline' : 'none')};
  /* font-display: swap; */

  ${(props) => {
    switch (props['data-mode']) {
      case 'Loading':
        return Loading;
      case 'MainSearch':
        return MainSearch;
      case 'SliderTopToggle':
        return SliderTopToggle;
      case 'SliderTopTitle':
        return SliderTopTitle;
      case 'MyInfo IB title':
        return MyInfoIBTitle;
      case 'MyInfo IB info':
        return MyInfoIBInfo;
      case 'AuthGuide':
        return AuthGuide;
      case 'AuthToggle':
        return AuthToggle;
      case 'DetailPageFirst':
        return DetailPageFirst;
      case 'DetailPageSecond':
        return DetailPageSecond;
      case 'DetailPageRtnComment':
        return DetailPageRtnComment;
      case 'DetailCommentFirst':
      case 'DetailCommentSecond':
      case 'DetailCommentThird':
        return DetailComment;
      case 'SearchFirst':
        return SearchFirst;
      case 'SearchClickDivFirst':
        return SearchClickDivFirst;
      default:
        return null;
    }
  }}
`;
