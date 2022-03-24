import { css } from '@emotion/react';
import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

const Loading = css`
  font-weight: 800;
  font-size: 40px;
`;

const MainSearch = css`
  font-size: 22px;
  font-weight: bold;
`;

const SliderTopToggle = css`
  margin-left: 20px;
  color: #0000007b;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

const SliderTopTitle = css`
  font-size: 20px;
`;

const MyInfoIBTitle = css`
  font-family: ${engFont}

  font-size: 16px;

  font-weight: 800;
  color: #0000007b;
`;

const MyInfoIBInfo = css`
  font-family: ${korFont}

  font-size: 14px;
  color: #3e4756;
  float: right;
`;

const AuthGuide = css`
  font-family: ${korFont}
  font-size: 14px;
`;

const AuthToggle = css`
  margin-left: 10px;
  color: #2980b9;
  :hover {
    cursor: pointer;
  }
`;

const DetailPage = css`
  color: rgb(105, 105, 105);
`;

const DetailPagetagName = css`
  ${DetailPage}
  margin-right: 65px;
`;

const DetailPageValue = css`
  ${DetailPage}
`;

const DetailPageRtnComment = css`
  font-size: 12px;
  margin-left: 10px;
`;

export const Sspan = styled.span`
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
      case 'DetailPagetagName':
        return DetailPagetagName;
      case 'DetailPageValue':
        return DetailPageValue;
      case 'DetailPageRtnComment':
        return DetailPageRtnComment;
      default:
        return null;
    }
  }}
`;
