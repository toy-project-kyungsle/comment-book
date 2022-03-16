import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;

  & a {
    text-decoration: none;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: row;
  & a {
    margin: auto 0;
    color: #050505d3;
    font-size: 20px;
  }
  & a:hover {
    color: #aca7cb;
  }
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
