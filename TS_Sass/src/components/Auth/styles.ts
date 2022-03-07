import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-family: 'Roboto', sans-serif;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 34%;

  background-color: white;

  height: 400px;
  width: 500px;

  border: 3px solid #979a9a;

  .inner {
    padding: 0 80px;
    margin-top: 60px;
  }

  .error {
    color: #ff0000c7;
    margin: 0;
    margin-left: 96px;
    margin-top: 30px;
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  /* display: -webkit-flex;
  -webkit-justify-content:right; */

  margin-right: 33px;
  margin-top: 20px;
  & input {
    height: 25px;
    width: 60px;
    border: none;
  }
  & input:hover {
    cursor: pointer;
  }
`;

export const SignUpOrLogin = styled.div`
  margin: 30px 0 0 97px;
  .signup {
    margin-left: 10px;
    color: #2980b9;
  }
`;
