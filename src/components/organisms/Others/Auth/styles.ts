import styled from '@emotion/styled';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  font-family: 'eng1 font regular';

  background-color: rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 34%;

  background-color: white;

  height: 450px;
  width: 500px;

  border: 3px solid #979a9a;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;
