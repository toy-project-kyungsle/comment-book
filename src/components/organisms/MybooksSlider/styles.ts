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

export const LoginGuide = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  position: absolute;
  top: ${(props) => (props['data-mode'] === 'nologin' ? '-60px' : props['data-mode'] === 'nobook' ? '60px' : null)};
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
  color: #00000096;
  margin: 0;
`;

export const GuideDiv = styled.div`
  height: 440px;
  width: 100%;
  text-align: center;
  background-color: #f2f2f2;
`;

export { ImgWidth, ImgHeight, ImgLeftRighMargin };
