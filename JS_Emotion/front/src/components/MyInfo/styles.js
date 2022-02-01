import styled from '@emotion/styled';

const background_color = '#9ebce9';
const font_color = '#3e4756';

export const Background = styled.div`
  background-color: ${background_color};

  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-top: ${font_color} 1px solid;
`;

export const Container = styled.div`
  color: ${font_color};

  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid black;
  border-radius: 10px;
  border-color: ${font_color};
`;

export const InfoLetters = styled.div`
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
