import styled from '@emotion/styled';

const ImgWidth = 205;
const ImgHeight = 300.96;
const ImgLeftRighMargin = 180 / 6;

export const SlidesBackground = styled.div`
  background-color: #f2f2f2;
  position: relative;
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  .container {
    position: relative;
    width: 1400px;
  }
`;

export const SlidesViewer = styled.div`
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

export const Controller = styled.div`
  .Left,
  .Right {
    position: absolute;
    bottom: -10px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #00000050;
    opacity: 0.8;
    font-size: 30px;
  }
  .Left:hover,
  .Right:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .Left {
    right: 230px;
  }

  .Right {
    right: 190px;
  }
`;

export const LoginGuide = styled.div`
  position: absolute;
  top: -60px;
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
  color: #00000096;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
`;

export const GuideDiv = styled.div`
  height: 440px;
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
`;

export const GuideImg = styled.img`
  height: 420px;
  width: 1000px;

  & hover {
  }
`;

export { ImgWidth, ImgLeftRighMargin };
