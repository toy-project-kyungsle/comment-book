import { ImgHeight, ImgLeftRighMargin, ImgWidth } from '@components/organisms/MybooksSlider/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${ImgWidth * 4 + ImgLeftRighMargin * (3 * 2)}px;
  height: ${ImgHeight + 55}px;
  overflow-x: hidden;
`;

export const Slides = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;

  margin: 0;
  height: ${ImgHeight}px;
  width: ${(props) => (ImgWidth + ImgLeftRighMargin * 2) * props['data-bookCount']};
  transform: ${(props) => `translateX(${props['data-trans']}px)`};

  transition: 0.5s;

  & div:nth-of-type(4n + 1) {
    margin-left: 0;
  }

  & div:nth-of-type(4n) {
    margin-right: 0;
  }
`;
