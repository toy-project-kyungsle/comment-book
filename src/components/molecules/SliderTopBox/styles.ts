import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

export const Background = styled.div`
  background-color: #f2f2f2;
`;

export const TopBox = styled.div`
  background-color: #f2f2f2;
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 100px;
  font-family: ${engFont}

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
  }

  .selectedCgCon {
    font-family: ${korFont} ;
    position: absolute;
    left: 0;
    top: 130px;

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
