import styled from '@emotion/styled';

export const Container = styled.div`
  height: 10%;
  display: flex;
  /* position: fixed;
  left: 0;
  top: 0;
  width: 100%; */
  background-color: #191970;
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  & a {
    text-decoration: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: row;
`;
