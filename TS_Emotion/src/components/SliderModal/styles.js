import styled from '@emotion/styled';

export const ClassifyingModal = styled.div`
  position: absolute;
  right: 0;
  top: 30px;

  background-color: #ececec;
  z-index: 3;

  display: flex;

  font-family: 'Noto Sans KR', sans-serif;
  color: #00000096;

  max-width: 655px;
  min-height: 80px;
  padding: 0 10px 0 20px;

  .modal_grid {
    display: grid;
    grid-template-columns: repeat(5, 120px);

    max-width: 600px;
    min-height: 80px;

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

      & div:hover {
        cursor: pointer;
        color: wheat;
      }
    }
  }

  .closeBtn {
    border: none;
    background-color: none;
    margin-top: 13px;
    & img {
      height: 13px;
      width: 13px;
    }
    & img:hover {
      cursor: pointer;
    }
  }

  .resetBtn {
    position: absolute;
    right: 8px;
    bottom: 10px;

    border: none;
    background-color: none;

    & img {
      height: 15px;
    }
    & img:hover {
      cursor: pointer;
    }
  }
`;
