import styled from '@emotion/styled';

const container_color = '#ececec';

export const Background = styled.div`
  min-height: 90%;
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
`;

export const Container = styled.div`
  position: relative;
  background-color: ${container_color};

  min-height: 500px;
  width: 100%;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22);
`;

export const ShortView = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgDiv = styled.div`
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
`;

export const Letters = styled.div`
  width: 100%;
  margin-left: 50px;
  & a {
    text-decoration: none;
    font-size: 25px;
    color: black;
    text-shadow: 3px 3px #f2f3f3;
    margin: 30px 0 30px 0;
  }
`;

export const LetterGrid = styled.div`
  height: 225px;
  display: grid;
  grid-template-columns: 100px 2fr;
  grid-auto-rows: minmax(30px, auto);

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const OnelineTextArea = styled.textarea`
  width: 100%;
`;

export const SubmitComment = styled.button`
  position: absolute;
  right: 20px;

  height: 30px;
  width: 80px;
  font-size: 15px;

  margin: 10px 0;

  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 1px 1px 1px rgba(0, 0, 0, 0.22);
`;

export const BtnDiv = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const InfoBtn = styled.button`
  height: 30px;
  width: 120px;
  font-size: 15px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 1px 1px 1px rgba(0, 0, 0, 0.22);
`;

export const AddEditBtn = styled.button`
  height: 30px;
  width: 120px;
  font-size: 15px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 1px 1px 1px rgba(0, 0, 0, 0.22);
`;

export const ExitInfoBtn = styled.button`
  height: 30px;
  width: 120px;
  font-size: 15px;

  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 1px 1px 1px rgba(0, 0, 0, 0.22);
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-right: 10px;
  text-align: justify;
`;
