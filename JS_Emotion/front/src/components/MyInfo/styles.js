import styled from '@emotion/styled';

export const Background = styled.div`
  background-color: #191970;
  height: 400px;

  border-top: wheat 1px solid;
`;

export const Container = styled.div`
  /* background-color: black; */
  color: wheat;

  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 28px;
  padding: 20px;

  border: 1px solid black;
  border-radius: 10px;
  border-color: wheat;
`;

export const InfoLetters = styled.div`
  /* background-color: black; */
  height: 300px;
  width: 40%;

  .name {
    height: 20%;
    font-size: 30px;
  }
  .letterBox {
    height: 80%;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;
    padding: 40px 20px 0px 20px;

    border: 1px solid black;
    border-radius: 10px;

    .title {
    }
  }
`;
