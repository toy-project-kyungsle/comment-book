import styled from '@emotion/styled';

const margin_meduim = '20px';
const font_size_medium = '15px';
const font_size_large = '25px';
const background_color = '#2c2b29';
const font_color = 'wheat';

export const Background = styled.div`
  background-color: ${background_color};

  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${margin_meduim} 0 ${margin_meduim};

  & a {
    color: ${font_color};
    text-decoration: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & a {
    font-size: ${font_size_large};
  }
  & input {
    height: 25px;
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
  }
  & button {
    background-color: ${background_color};
    border: none;
    cursor: pointer;
  }
  & form {
    margin: auto 0 auto ${margin_meduim};
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & a {
    font-size: ${font_size_medium};
  }
  & p {
    color: ${font_color};
    font-size: ${font_size_medium};
  }
`;
