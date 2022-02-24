import styled from '@emotion/styled';

export const Container = styled.div`
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
  & p {
    font-size: 15px;
  }
  & input {
    background: none;
    height: 24px;
    width: 130px;
    margin: 0px 5px 8px 20px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 13px;
    text-align: center;
  }
  & input:focus {
    outline: none;
  }
  .searchBtn {
    background: none;
    margin: 0 20px 5px 0;
    border: none;
    cursor: pointer;
  }

  .auth {
    & p:hover {
      cursor: pointer;
      color: #aca7cb;
    }
  }
`;
