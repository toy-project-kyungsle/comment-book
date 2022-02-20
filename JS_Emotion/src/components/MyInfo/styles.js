import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;
`;

export const BackgroundImg = styled.img`
  z-index: -1;
  width: 100%;
`;

export const TitleBox = styled.div`
  position: absolute;
  left: 7%;
  bottom: 9%;
  width: 380px;
  font-family: 'Roboto', sans-serif;

  .title {
    font-size: 20px;
  }
  .goodMent,
  .mentor {
    font-size: 16px;
    color: #0000007b;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  right: 5%;
  bottom: 10.2%;
  height: 15%;

  width: 300px;

  font-family: 'Noto Sans KR', sans-serif;

  display: grid;
  grid-template-columns: 150px 230px;
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
  }
`;
