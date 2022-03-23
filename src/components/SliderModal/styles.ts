import styled from '@emotion/styled';

export const ClassifyingModal = styled.div`
  font-family: 'Noto Sans KR', sans-serif;

  position: absolute;
  right: 0;
  top: 115px;

  background-color: #ececec;
  z-index: 3;

  display: flex;

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
`;
