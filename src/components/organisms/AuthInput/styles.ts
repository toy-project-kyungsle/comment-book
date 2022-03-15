import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";

export const Wrapper = styled.div`
  font-family: ${engFont};

  & div {
    height: 30px;
    margin-bottom: 15px;
  }
  & input:focus {
    outline: none;
  }
  .AuthInputTag {
    width: 100px;
    display: inline-block;
    text-align: center;
  }
`;
