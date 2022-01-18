import styled from '@emotion/styled';

export const Movie = styled.div`
  color: rgb(32, 30, 30);
  display: flex;
  justify-content: center;
`;

export const Show = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px;
  padding: 10px;
  width: 500px;
  height: 370px;
  border: 2px solid snow;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImgDiv = styled.div`
  float: left;
  width: 230px;
  height: 345px;
`;

export const Letters = styled.div`
  width: 250px;
  height: 350px;
  padding-left: 20px;
  & h3,
  p {
    margin: 10px;
  }
  & li {
    list-style-type: none;
  }
  & p {
    word-break: break-all;
    text-align: justify;
  }
`;

export const Title = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
