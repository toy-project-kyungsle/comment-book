import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;
  background: #e2e6e7;

  z-index: 1;

  width: 100%;
  height: 760px;
  overflow-x: hidden;

  border: none;

  display: flex;
  justify-content: center;
`;

export const PositionDiv = styled.div`
  position: relative;
  width: 1100px;
  height: 760px;
`;

export const MoreBackgroundImg = styled.div`
  position: absolute;
  z-index: -3;
  width: 100%;
  height: 760px;

  background: #e2e6e7;
  background: radial-gradient(circle, rgba(223, 227, 228, 1) 0%, rgba(227, 231, 232, 1) 100%);

  background-size: cover;

  @media (max-width: 1024px) {
    background: linear-gradient(to top, rgb(236, 240, 241) 60%, rgb(228,232,233) 40%);
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  z-index: -2;
  width: 1665px;
  height: 760px;

  background-image: url('https://user-images.githubusercontent.com/79993356/154531958-e0068ede-1ae9-4b44-8522-2676c4b8d3ef.png');
  background-size: cover;

  @media (max-width: 1024px) {
    background-image: url('https://user-images.githubusercontent.com/79993356/160281782-dfbd3cdc-fdc4-4dc8-839e-8b0438f2af44.png');
    top: 180px;
    width: 100%;
    max-height: 70%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
