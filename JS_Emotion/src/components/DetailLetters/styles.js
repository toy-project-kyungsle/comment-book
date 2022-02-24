import styled from '@emotion/styled';

export const Container = styled.div`
  .title {
    margin: 0;
    margin-bottom: 20px;
    font-size: 22px;
    color: black;
  }

  .infoDiv {
    color: rgb(105, 105, 105);

    margin: 7px 0;

    .rtcomment {
      font-size: 12px;
      margin-left: 10px;
    }
  }

  .tagName {
    margin-right: 65px;
  }

  & hr {
    margin: 20px 0;
    border: 2px solid rgb(230, 230, 230);
  }

  .longComment {
    color: rgb(105, 105, 105);
  }
`;

export const RatingTextArea = styled.textarea`
  resize: none;
  vertical-align: middle;

  width: 50px;
  height: 25px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const OnelineTextArea = styled.textarea`
  resize: none;
  vertical-align: middle;

  width: 420px;
  height: 55px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;
