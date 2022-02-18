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
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);

  & img {
    /* width: 308.34px; */
  }
`;

export const Letters = styled.div`
  width: 100%;
  margin-left: 70px;

  & a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }

  .title {
    margin: 0;
    margin-bottom: 20px;
  }

  .infoDiv {
    color: rgb(105, 105, 105);

    margin: 7px 0;
  }

  .tagName {
    margin-right: 65px;
  }

  & hr {
    margin: 20px 0;
    border: 2px solid rgb(230, 230, 230);
  }

  .longComment {
    color: rgb(105, 105, 105);
  }
`;

export const OnelineTextArea = styled.textarea`
  width: 100%;
`;

export const Description = styled.div`
  color: rgb(105, 105, 105);

  text-align: justify;
`;

export const BtnDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: -10;

  color: rgb(105, 105, 105);
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;

  & span {
    margin-left: 20px;
  }

  & span:hover {
    cursor: pointer;
  }
`;
