import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;
  /* background: rgb(223,227,228);
background: radial-gradient(circle, rgba(223,227,228,1) 0%, rgba(227,231,232,1) 100%); */

  /* z-index: -2; */

  width: 100%;
  overflow-x: hidden;

  display: flex;
  justify-content: center;

  .positionDiv {
    position: relative;
    width: 1000px;
    height: 760px;
  }
`;

export const BackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
  width: 1665px;
  height: 760px;
`;

export const TitleBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 60px;
  width: 380px;
  font-family: 'Roboto', sans-serif;

  .title {
    font-size: 20px;
    color: #000000d3;
  }
  .goodMent {
    font-size: 16px;
    color: #0000007b;
  }
  .mentor {
    font-size: 14px;
    color: #0000007b;
  }
  .guide {
    font-size: 16px;
    color: #0000007b;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 60px;
  height: 15%;

  font-family: 'Noto Sans KR', sans-serif;

  display: grid;
  grid-template-columns: 150px 120px;
  grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;

  .title {
    font-size: 16px;

    font-family: 'Roboto', sans-serif;

    font-weight: 800;
    color: #0000007b;
  }

  .info {
    font-size: 14px;
    color: #3e4756;
    text-align: right;
  }
`;
