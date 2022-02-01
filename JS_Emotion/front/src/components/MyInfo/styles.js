import styled from '@emotion/styled';

const background_color = '#FFFFFF';
const info_color = '#FFF7E9';
const font_color = '#3e4756';

export const Background = styled.div`
  background-color: ${background_color};

  height: 650px;
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

  border-radius: 10px;
`;

export const InfoLetters = styled.div`
  height: 300px;
  width: 40%;

  .name {
    font-weight: bold;
    height: 20%;
    font-size: 30px;
    text-shadow: 3px 3px #f2f3f3;
  }
  .letterBox {
    background-color: ${info_color};

    height: 80%;
    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;
    padding: 40px 20px 0px 20px;

    border-radius: 10px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);

    .title {
      font-weight: bold;
    }
  }
`;
