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
`;

export const Modalgrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(auto-fill, minmax(40px, auto));

    max-width: 600px;
    min-height: 80px;

    @media (max-width: 735px) {
      grid-template-columns: repeat(3, auto);
      max-width: 360px;
    }
    @media (max-width: 470px) {
      grid-template-columns: repeat(2, auto);
      max-width: 240px;
      min-height: 120px;
    }
`