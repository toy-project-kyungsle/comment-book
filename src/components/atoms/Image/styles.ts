import { PictureHeight, PictureWidth } from '@components/molecules/LinkImage/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SocialLogin = css`
  height: 20px;
  width: 20px;
  margin: 0px 10px 3px 0px;
`;

const MainSlider = css`
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

const sliderClose = css`
  height: 13px;
  width: 13px;
`;

const sliderReset = css`
  height: 15px;
`;

const SearchRender = css`
  width: 170px;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const DetailPageXBtn = css`
  width: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const Simage = styled.img`
  ${(props) => {
    switch (props['data-mode']) {
      case 'SocialLogin':
        return SocialLogin;
      case 'SliderImg':
        return SliderImg;
      case 'sliderClose':
        return sliderClose;
      case 'sliderReset':
        return sliderReset;
      case 'SearchRender':
        return SearchRender;
      case 'MainSlider':
        return MainSlider;
      case 'DetailPageXBtn':
        return DetailPageXBtn;
      default:
        return null;
    }
  }}
`;
