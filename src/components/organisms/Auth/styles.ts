import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-family: ${engFont};

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 34%;

  background-color: white;

  height: 450px;
  width: 500px;

  border: 3px solid #979a9a;
`;

export const SignUpOrLogin = styled.div`
  margin: 30px 0 0 97px;
`;
