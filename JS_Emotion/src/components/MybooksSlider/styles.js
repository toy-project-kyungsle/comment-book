import styled from '@emotion/styled';

const background_color = '#99A5D9';
// const font_color = '#3e4756';
const ImgWidth = 235;
const ImgHeight = 345;
const ImgLeftRighMargin = 10;

export const Background = styled.div`
  background-color: ${background_color};

  height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const SlidesViewer = styled.div`
  position: relative;
  margin: 0 auto;
  width: ${ImgWidth * 4 + ImgLeftRighMargin * (4 * 2)}px;
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
    top: 68%;
    background-color: transparent;
    border: none;
    outline: none;
    color: rgb(131, 55, 218);
    opacity: 0.8;
    font-size: 44px;
  }
  .Left:hover,
  .Right:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .Left {
    left: 80px;
  }

  .Right {
    right: 80px;
  }
`;

export { ImgWidth, ImgLeftRighMargin };
