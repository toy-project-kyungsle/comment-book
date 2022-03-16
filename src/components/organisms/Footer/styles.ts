import styled from '@emotion/styled';

export const BackGround = styled.div`
  position: relative;

  font-family: 'Roboto', serif;

  height: 150px;
  width: 1000px;
  margin: 50px auto 150px auto;
  padding-bottom: 200px;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 0;

  width: 450px;
`;

export const Mysns = styled.div`
  display: flex;
  justify-content: flex-end;

  & a {
    font-size: 14px;
    color: grey;
    margin-left: 50px;
    text-decoration: none;
  }
`;
