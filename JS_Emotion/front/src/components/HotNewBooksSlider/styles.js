import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: green;

  height: 450px;
  padding-top: 100px;
`;

export const Container = styled.div`
  position: relative;
  /* margin-top: 200px; */
  /* background-color: black; */
`;

export const SlidesViewer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1020px;
  height: 250px;
  overflow: hidden;
`;

export const Slides = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 5100px;
  height: 345px;
  display: flex;

  transition: 0.5s;
`;

export const Controller = styled.div`
  .Left,
  .Right {
    position: absolute;
    top: 40%;
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
