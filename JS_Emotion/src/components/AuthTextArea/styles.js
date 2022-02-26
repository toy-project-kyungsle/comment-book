import styled from '@emotion/styled';

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
    text-align: center;
  }
  .password {
    border: none;
    border-bottom: 1px solid;
  }
`;
