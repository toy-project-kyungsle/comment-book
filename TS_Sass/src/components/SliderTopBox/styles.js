import styled from '@emotion/styled';

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
