import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  display: flex;
  flex-direction: row;

  height: 70%;
  width: 70%;

  border: 1px solid black;
  border-radius: 20px;
`;

export const LeftSection = styled.div`
  /* position: absolute;
  top: 25%;
  left: 25%; */
  z-index: 2;

  border-right: 1px solid black;
  width: 70%;
`;

export const ShortView = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;

  height: 65%;
`;

export const ImgDiv = styled.div`
  float: left;
  width: 230px;
  height: 345px;
`;

export const Letters = styled.div`
  width: 70%;
  margin: 20px 0 0 30px;
  & h3,
  p {
    margin: 20px 0 20px 0;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 0 10px 10px 10px;
`;

export const RightSection = styled.div`
  /* position: absolute;
  top: 25%;
  left: 25%; */
  z-index: 2;

  width: 30%;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: ${Number(100 / 6)}%;
`;
