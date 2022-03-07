import styled from '@emotion/styled';

export const Background = styled.div`
  /* background-color: grey; */
  height: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .search {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 80px;
  }
`;

export const SearchBar = styled.div`
  color: #050505d3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & input {
    background: none;
    height: 40px;
    width: 400px;
    margin-left: 43px;
    /* margin: 0px 5px 8px 20px; */
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    text-align: center;
  }
  & input:focus {
    outline: none;
  }
  .searchBtn {
    background: none;
    margin-top: 15px;
    margin-left: 8;
    /* margin: 0 20px 5px 0; */
    border: none;
    cursor: pointer;
  }
`;
