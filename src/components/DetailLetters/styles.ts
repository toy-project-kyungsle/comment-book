import styled from '@emotion/styled';

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
