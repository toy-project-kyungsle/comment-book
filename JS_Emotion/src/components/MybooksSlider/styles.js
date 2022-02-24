import styled from '@emotion/styled';

const ImgWidth = 205;
const ImgHeight = 300.96;
const ImgLeftRighMargin = 180 / 6;

export const TopBox = styled.div`
  position: relative;
  width: 1000px;
  margin: 100px auto 100px auto;
  font-family: 'Noto Sans KR', sans-serif;

  animation: smoothShow 1s;

  @keyframes smoothShow {
    from {
      position: relative;
      bottom: -50px;
      opacity: 0;
    }
    to {
      position: relative;
      bottom: 0px;
      opacity: 1;
    }
  }

  .upperContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .title {
      font-size: 20px;
    }

    .classify > span {
      margin-left: 20px;
      color: #0000007b;
    }

    .classify > span:hover {
      cursor: pointer;
      color: wheat;
    }
  }

  .selectedCgCon {
    position: absolute;
    left: 0;
    top: 50;

    color: #00000096;
    font-size: 14px;

    display: flex;

    & div {
      margin-right: 15px;
      padding-bottom: 5;

      border-bottom: 1px solid #00000030;
    }
  }
`;

export const SlidesBackground = styled.div`
  position: relative;
  margin-bottom: 100px;
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
  width: ${(props) => (ImgWidth + ImgLeftRighMargin * 2) * props.bookCount};
  transform: ${(props) => `translateX(${props.trans}px)`};

  transition: 0.5s;

  & div:nth-child(4n + 1) {
    margin-left: 0;
  }

  & div:nth-child(4n) {
    margin-right: 0;
  }
`;

export const Controller = styled.div`
  .Left,
  .Right {
    position: absolute;
    top: 47%;
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
    left: 6%;
  }

  .Right {
    right: 6%;
  }
`;

export { ImgWidth, ImgLeftRighMargin };
