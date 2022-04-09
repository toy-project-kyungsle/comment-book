import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Header

const Header = css`
  margin: 0 20px 5px 0;
`;

const MainPage_Search = css`
  border: none;
`;

// Slider

const MainPage_Slider_Modal_Close = css`
  margin-top: 13px;
`;

const MainPage_Slider_Modal_Reset = css`
  position: absolute;
  right: 8px;
  bottom: 10px;
`;

const MainPage_Slider = css`
  position: absolute;
  bottom: -10px;
  color: #00000050;
  opacity: 0.8;
  font-size: 30px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const MainPage_Slider_Left = css`
  ${MainPage_Slider}
  right: 40px;
`;

const MainPage_Slider_Right = css`
  ${MainPage_Slider}
  right: 0px;
`;

// Search

const SearchPage_Back = css`
  position: absolute;
  left: -260px;
  bottom: -3px;
  background-color: white;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 800px) {
    left: 0;
  }
`;

export const Sbutton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${(props) => {
    switch (props['data-mode']) {
      case 'Header':
        return Header;
      case 'MainPage--Search':
        return MainPage_Search;
      case 'MainPage--Slider--Modal--Close':
        return MainPage_Slider_Modal_Close;
      case 'MainPage--Slider--Modal--Reset':
        return MainPage_Slider_Modal_Reset;
      case 'MainPage--Slider--Left':
        return MainPage_Slider_Left;
      case 'MainPage--Slider--Right':
        return MainPage_Slider_Right;
      case 'Search':
        return SearchPage_Back;
      default:
        return null;
    }
  }}
`;
