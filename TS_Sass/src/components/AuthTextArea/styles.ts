import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

export const EnterContainer = styled.div`
  font-family: ${engFont};

  & div {
    height: 30px;
  }
  & div:nth-child(2) {
    margin-top: 15px;
  }
  & div:nth-child(3) {
    margin-top: 15px;
  }
  & input {
    font-family: ${korFont};
    font-size: 12px;
    border: none;
    border-bottom: 1px solid;
    width: 200px;
    text-align: center;
  }
  & input:focus {
    outline: none;
  }
  .inputTag {
    width: 100px;
    display: inline-block;
    text-align: center;
  }
`;
