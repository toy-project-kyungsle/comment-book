import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 30px auto;
  & a {
    color: black;
    text-decoration: none;
  }
`;

export const Show = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ececec;
  transition: all 0.4s ease;

  margin: 10px 10px;
  padding: 10px;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
  overflow: hidden;

  :hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const ImgDiv = styled.div`
  float: left;
  width: 230px;
  height: 345px;
`;

export const Letters = styled.div`
  width: 350px;
  height: 300px;
  padding-left: 20px;
  & h3,
  p {
    margin: 10px;
  }
  & li {
    list-style-type: none;
  }
  & p {
    word-break: break-all;
    text-align: justify;
  }
`;

export const Title = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & a {
    color: black;
    text-decoration: none;
  }
`;
