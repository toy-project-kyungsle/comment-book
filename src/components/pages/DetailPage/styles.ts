import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 825px) {
    height: unset;
  }
`;

export const Container = styled.div`
  position: relative;

  width: 800px;

  display: flex;
  flex-direction: row;
  @media (max-width: 825px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
  @media (max-width: 825px) {
    text-align: center;
    box-shadow: unset;
    margin-top: 50px;
  }
`;

export const Letters = styled.div`
  width: 100%;
  margin-left: 70px;

  & hr {
    margin: 20px 0;
    border: 2px solid rgb(230, 230, 230);
  }
  @media (max-width: 825px) {
    margin: 0px;
    margin-top: 50px;
    padding: 0 30px;
  }
`;
