import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
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
