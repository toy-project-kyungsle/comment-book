import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  margin-top: 30px;
`;

export const Ment = styled.div`
  font-size: 50px;
  font-weight: bold;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, auto));
  /* margin: */
`;

export const Empty = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-top: 20px;
`;

export const List = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    color: black;
    font-size: 20px;
    text-decoration: none;
  }
`;
