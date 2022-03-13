import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;

  width: 800px;

  display: flex;
  flex-direction: row;

  font-family: 'Noto Sans KR', sans-serif;

  .topBtn {
    position: absolute;
    top: -5;
    right: 0;
    z-index: 5;

    & img {
      width: 15px;
    }

    & img:hover {
      cursor: pointer;
    }
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);

  & a {
    position: absolute;
    left: 0;
    bottom: -20;
    text-decoration: none;
    font-size: 12px;
    color: rgb(105, 105, 105);
    width: 60px;
  }
  & a:hover {
    color: black;
  }
`;

export const Letters = styled.div`
  width: 100%;
  margin-left: 70px;

  & hr {
    margin: 20px 0;
    border: 2px solid rgb(230, 230, 230);
  }

  .longComment {
    color: rgb(105, 105, 105);
  }
`;
