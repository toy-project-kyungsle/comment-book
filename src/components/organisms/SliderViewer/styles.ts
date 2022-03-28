import { ImgHeight, ImgLeftRighMargin, ImgWidth } from '@components/organisms/MybooksSlider/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${ImgWidth * 4 + ImgLeftRighMargin * (2 * 3)}px;
  height: ${ImgHeight + 55}px;
  overflow-x: hidden;

  @media (max-width: 1000px) and (min-width: 735px) {
    width: ${ImgWidth * 3 + ImgLeftRighMargin * (2 * 2)}px;
  }
  @media (max-width: 735px) and (min-width: 470px) {
    width: ${ImgWidth * 2 + ImgLeftRighMargin * (2 * 1)}px;
  }
  @media (max-width: 470px) {
    width: ${ImgWidth}px;
  }
`;

export const Slides = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;

  margin: 0;
  height: ${ImgHeight}px;
  width: ${(props) => (ImgWidth + ImgLeftRighMargin * 2) * props['data-bookCount']}px;
  transform: ${(props) => `translateX(${props['data-trans']}px)`};

  transition: 0.5s;


  @media (min-width: 1000px) {
    &div {
      margin: 0 ${ImgLeftRighMargin};
    }
    & div:nth-of-type(4n + 1) {
      margin-left: 0;
    }
    & div:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  @media (max-width: 1000px) and (min-width: 735px) {
    &div {
      margin: 0 ${ImgLeftRighMargin};
    }
    & div:nth-of-type(3n + 1) {
      margin-left: 0;
    }
    & div:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  @media (max-width: 735px) and (min-width: 470px) {
    &div {
      margin: 0 ${ImgLeftRighMargin};
    }
    & div:nth-of-type(2n + 1) {
      margin-left: 0;
    }
    & div:nth-of-type(2n) {
      margin-right: 0;
    }
  }
  @media (max-width: 470px) {
    &div {
      margin: 0px;
    }
  }
`;
