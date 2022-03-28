import styled from '@emotion/styled';

export const BackGround = styled.div`
  position: relative;

  font-family: 'Roboto', serif;

  height: 150px;
  width: 1000px;
  margin: 50px auto 150px auto;
  padding-bottom: 200px;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 0;

  width: 100%;
`;

export const Mysns = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 470px) {
    justify-content: start;
  }
`;
