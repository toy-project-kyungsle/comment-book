import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 110px;
  right: 50px;
  left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSection = styled.div`
  color: #050505d3;
  display: flex;
  flex-direction: row;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
