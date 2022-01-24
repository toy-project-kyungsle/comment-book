import styled from '@emotion/styled';

export const Container = styled.div`
  width: 60%;
  margin-left: 20px;
  .name {
    height: 20%;
    font-size: 30px;
  }
  .categoryContainer {
    display: flex;
    justify-content: space-around;
    height: 80%;
    width: 100%;
    padding-top: 20px;
    border: 1px solid black;
    border-radius: 10px;
  }
  .CategoryBox {
    position: relative;
    height: 100%;
    top: 15%;
  }
  .categoryImg {
    margin-bottom: 20px;
    & img {
      height: 100px;
    }
  }
  .categoryName {
    text-align: center;
  }
`;
