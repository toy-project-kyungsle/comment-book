import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  margin-top: 30px;
`;

export const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, auto));
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`;

export const List = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
