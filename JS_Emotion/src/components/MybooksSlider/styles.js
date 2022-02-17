import styled from '@emotion/styled';

const ImgWidth = 205;
const ImgHeight = 300.96;
const ImgLeftRighMargin = 180 / 6;

export const TopBox = styled.div`
  position: relative;
  width: 1000px;
  margin: 100px auto 100px auto;
  font-family: 'Roboto Slab', serif;

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
      /* font-size: 20px; */
      /* transform: scale(1.3); */
      color: wheat;
    }
  }
  .classifyModal {
    background-color: #ececec;
    z-index: 3;
    position: absolute;

    font-family: 'Noto Sans KR', sans-serif;
    color: #00000096;

    display: grid;
    grid-template-columns: repeat(5, 120px);
    /* grid-template-rows: repeat(auto-fill, minmax(40px, auto)); */

    max-width: 640px;
    min-height: 80px;
    padding: 0 20px;
    right: 0;
    top: 30px;

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;

      width: 120px;
      font-size: 14px;
    }
    .contentInner {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
  height: ${ImgHeight}px;
  overflow: hidden;
`;

export const Slides = styled.div(
  {
    position: `absolute`,
    left: `0`,
    top: `0`,
    height: `345px`,
    display: `flex`,

    transition: `0.5s`,

    'div:nth-child(4n+1)': {
      'margin-left': '0',
    },
    'div:nth-child(4n)': {
      'margin-right': '0',
    },
  },
  (props) => ({
    width: (ImgWidth + ImgLeftRighMargin * 2) * props.bookCount,
    transform: `translateX(${props.trans}px)`,
  }),
);

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
