import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;

  font-family: 'Roboto Slab', serif;

  height: 150px;
  width: 1000px;
  margin: 150px auto;
  padding-bottom: 200px;
`;

export const Container = styled.div`
  position: absolute;
  right: 0;

  width: 450px;

  border-top: 1px solid grey;
`;

export const Alert = styled.div`
  margin: 15px 0;
  & p {
    font-size: 14px;
    color: grey;
    margin: 0;
  }
`;

export const Mysns = styled.div`
  display: flex;
  justify-content: flex-end;
  .mysns_container {
  }
  & a {
    font-size: 14px;
    color: grey;
    margin-left: 50px;
    text-decoration: none;
  }
`;

export const Copyright = styled.div`
  margin: 15px 0;
  & p {
    font-size: 14px;
    color: #3e4756;
    margin: 0;
  }
`;
