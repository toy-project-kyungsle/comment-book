import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

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

export const EnterContainer = styled.div`
  & div {
    height: 30px;
  }
  & div:nth-child(2) {
    margin-top: 15px;
  }
  & input {
    width: 200px;
    text-align: center;
  }
  & input:focus {
    outline: none;
  }
  .email {
    border: none;
    border-bottom: 1px solid;
  }
  .inputTag {
    width: 100px;
    display: inline-block;
  }
  .password {
    border: none;
    border-bottom: 1px solid;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: right;

  margin-right: 23px;
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

export const SosialLogin = styled.div`
  width: 350px;
  margin: 30px 0 0 67px;
  padding: 0 30px;

  & img {
    height: 20px;
    width: 20px;

    margin: 0 10px 3px 0;
  }
  .innerSocial {
    display: flex;
    justify-content: space-around;

    margin-top: 30px;

    & span:hover {
      cursor: pointer;
    }
  }
  .forflex {
    display: flex;
  }
  #google,
  #github {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
