import styled from '@emotion/styled';

const container_color = '#FFF7E9';

export const Container = styled.div`
  width: 60%;
  margin-left: 20px;
  .name {
    font-weight: bold;
    height: 20%;
    font-size: 30px;
    text-shadow: 3px 3px #f2f3f3;
  }
  .categoryContainer {
    background-color: ${container_color};

    display: flex;
    justify-content: space-around;
    height: 80%;
    width: 100%;
    padding-top: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
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
