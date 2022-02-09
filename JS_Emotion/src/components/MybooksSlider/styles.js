import styled from '@emotion/styled';

const background_color = '#99A5D9';
// const font_color = '#3e4756';

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

export const SlidesViewer = styled.div({
  position: `relative`,
  margin: `0 auto`,
  width: `1180px`,
  height: `345px`,
  overflow: `hidden`,
});

export const Slides = styled.div(
  {
    position: `absolute`,
    left: `0`,
    top: `0`,
    height: `345px`,
    display: `flex`,

    transition: `0.5s`,
  },
  (props) => ({ width: 295 * props.bookCount, transform: `translateX(${props.trans}px)` }),
);

export const Controller = styled.div`
  .Left,
  .Right {
    position: absolute;
    top: 65%;
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
