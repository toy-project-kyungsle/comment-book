import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Loading = css`
  font-family: 'eng1 font regular';
  font-weight: 800;
  font-size: 40px;
`;

const HoverPointer = css`
  :hover {
    cursor: pointer;
  }
`;

// Auth

const AuthGuide = css`
  font-family: 'kor font regular';
  font-size: 14px;
`;

const AuthToggle = css`
  font-family: 'eng1 font regular';
  margin-left: 10px;
  color: #2980b9;
  :hover {
    cursor: pointer;
  }
`;

//Main--Info

const Main__Info__IB__Title = css`
  font-family: 'eng1 font regular';
  font-size: 16px;
  font-weight: 800;
  color: #0000007b;
`;

const Main__Info__IB__Inner = css`
  font-family: 'kor font regular';
  font-size: 14px;
  color: #3e4756;
  text-align: end;
`;

const Main__Info__TB__Title = css`
  font-family: 'eng1 font regular';
  font-size: 20px;
  font-weight: bold;
  color: #000000d3;
  line-height: 36px;
  display: block;
`;

const Main__Info__TB__Inner = css`
  font-family: 'kor font regular';
  font-size: 14px;
  color: #0000007b;
  line-height: 36px;
  margin: 0;
  display: block;

  @media (max-width: 768px) {
    display: inline;
  }
`;

// Main Search

const Main__Search = css`
  font-family: 'eng1 font regular';
  font-size: 22px;
  font-weight: bold;
`;

// Slider

const SliderTopTitle = css`
  font-family: 'eng1 font regular';
  font-size: 20px;
`;

const SliderTopToggle = css`
  font-family: 'eng1 font regular';
  margin-left: 20px;
  color: #0000007b;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

const SliderFilterLetter = css`
  font-family: 'kor font regular';
  display: table-cell;
  vertical-align: middle;
  :hover {
    cursor: pointer;
  }
`;

// DetailPage

const DetailPage = css`
  font-family: 'kor font regular';
  color: rgb(105, 105, 105);
`;

const DetailPageFirst = css`
  ${DetailPage}
  margin-right: 65px;
`;

const DetailPageSecond = css`
  ${DetailPage}
`;

const DetailPageRtnComment = css`
  font-family: 'kor font regular';
  font-size: 12px;
  margin-left: 10px;
`;

const DetailComment = css`
  font-family: 'kor font regular';
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

// Search

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
  font-family: 'eng1 font regular';
  margin-right: 10px;
`;

// Footer

const Footer = css`
  font-family: 'eng1 font regular';
  font-size: 14px;
  color: grey;
  margin: 0;
  text-align: end;
  display: block;

  @media (max-width: 470px) {
    display: inline;
  }
`;

export const Sspan = styled.span`
  display: ${(props) => (props['data-visibility'] ? 'inline' : 'none')};

  ${(props) => {
    switch (props['data-mode']) {
      case 'Loading':
        return Loading;
      case 'hover-pointer':
        return HoverPointer;
      case 'MainPage--Search':
        return Main__Search;
      case 'SliderTopToggle':
        return SliderTopToggle;
      case 'SliderTopTitle':
        return SliderTopTitle;
      case 'SliderFilterLetter':
        return SliderFilterLetter;
      case 'Main--Info--IB--Title':
        return Main__Info__IB__Title;
      case 'Main--Info--IB--Inner':
        return Main__Info__IB__Inner;
      case 'Main--Info--TB--Title':
        return Main__Info__TB__Title;
      case 'Main--Info--TB--Inner':
        return Main__Info__TB__Inner;
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
      case 'DetailComment':
        return DetailComment;
      case 'SearchFirst':
        return SearchFirst;
      case 'SearchClickDivFirst':
        return SearchClickDivFirst;
      case 'Footer':
        return Footer;
      default:
        return null;
    }
  }}
`;
