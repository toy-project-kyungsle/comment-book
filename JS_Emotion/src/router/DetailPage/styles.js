import styled from '@emotion/styled';

const background_color = 'white';
const container_color = '#ececec';

export const Background = styled.div`
  background-color: ${background_color};
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: ${container_color};

  display: flex;
  flex-direction: row;

  height: 500px;
  width: 70%;
  margin: 0 auto;
  padding: 20px;

  border-radius: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22);
`;

export const LeftSection = styled.div`
  z-index: 2;

  height: 100%;
  width: 100%;
  /* border-right: 10px double #a7aabc; */
  overflow: hidden;
`;

export const ShortView = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const ImgDiv = styled.div`
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
`;

export const Letters = styled.div`
  width: 65%;
  margin-left: 50px;
  & a {
    text-decoration: none;
    font-size: 25px;
    color: black;
    text-shadow: 3px 3px #f2f3f3;
    margin: 30px 0 30px 0;
  }
  & p {
    margin: 30px 0 30px 0;
  }
`;

export const AddEditComment = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const LetterGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr;
  grid-auto-rows: minmax(40px, auto);
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-right: 10px;
  text-align: justify;
`;
