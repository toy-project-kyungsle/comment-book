import styled from '@emotion/styled';

const engFont = "'Roboto', sans-serif";
const korFont = "'Noto Sans KR', sans-serif";

export const SosialLogin = styled.div`
  font-family: ${engFont};
  width: 350px;
  margin: 30px 0 0 67px;
  padding: 0 30px;

  .guide {
    font-family: ${korFont};
    font-size: 14px;
  }

  & img {
    height: 20px;
    width: 20px;

    margin: 0 10px 3px 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 30px;

  & img:hover {
    cursor: pointer;
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
  #google:hover,
  #github:hover {
    & div {
      cursor: pointer;
    }
  }
`;
