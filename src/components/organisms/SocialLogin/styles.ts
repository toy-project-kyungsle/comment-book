import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

export const Wrapper = styled.div`
  font-family: ${engFont};
  width: 350px;
  margin: 30px 0 0 67px;
  padding: 0 30px;

  .guide {
    font-family: ${korFont};
    font-size: 14px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 30px;

  & img:hover {
    cursor: pointer;
  }
`;
