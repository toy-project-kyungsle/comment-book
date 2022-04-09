import { PictureHeight, PictureWidth } from '@components/molecules/LinkImage/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Reusable

const ImgHover = css`
  :hover {
    cursor: pointer;
  }
`;

// Auth

const SocialLogin = css`
  height: 20px;
  width: 20px;
  margin: 0px 10px 3px 0px;
  ${ImgHover}
`;

// Slider

const MainPage_Slider = css`
  height: 420px;
  width: 1000px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const SliderImg = css`
  height: ${PictureHeight};
  width: ${PictureWidth};
  z-index: 100;
`;

const MainPage_Slider_Modal_Close = css`
  height: 13px;
  width: 13px;
`;

const MainPage_Slider_Modal_Resetset = css`
  height: 15px;
`;

// Search

const SearchRender = css`
  width: 170px;
  transition: 0.5s;
  ${ImgHover}
  :hover {
    transform: scale(1.05);
  }
`;

// Detail

const BookDetail_Xbtn = css`
  width: 15px;
  position: absolute;
  top: 8px;
  right: 0px;
  z-index: 5;
  @media (max-width: 800px) {
    top: 30px;
    right: 30px;
  }
  ${ImgHover}
`;

export const Simage = styled.img`
  ${(props) => {
    switch (props['data-mode']) {
      case 'ImgHover':
        return ImgHover;
      case 'SocialLogin':
        return SocialLogin;
      case 'SliderImg':
        return SliderImg;
      case 'MainPage--Slider--Modal--Close':
        return MainPage_Slider_Modal_Close;
      case 'MainPage--Slider--Modal--Reset':
        return MainPage_Slider_Modal_Resetset;
      case 'SearchRender':
        return SearchRender;
      case 'MainPage--Slider':
        return MainPage_Slider;
      case 'BookDetail--Xbtn':
        return BookDetail_Xbtn;
      default:
        return null;
    }
  }}
`;
