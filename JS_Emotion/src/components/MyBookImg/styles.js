import styled from '@emotion/styled';

const PictureWidth = '235px';
const PictureHeight = '345px';
const Margin_Small = '10px';
const Padding_Small = '20px';

export const BookContainer = styled.div`
  width: ${PictureWidth};
  margin: 0 ${Margin_Small};

  border: none;
  border-radius: 5px;
  overflow: hidden;

  & a {
    width: ${PictureWidth};
  }
`;

export const BookImg = styled.img`
  width: ${PictureWidth};
  height: ${PictureHeight};
`;

export const Wrap = styled.div`
  width: ${PictureWidth};
  height: 100%;
  padding: ${Padding_Small};
  display: ${(props) => props.wrapDisplay};
  position: absolute;
  top: 0;

  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0.8);
  .comment {
    line-height: 300%;
  }
  .rating {
    width: calc(${PictureWidth} - (2 * ${Padding_Small}));
    position: absolute;
    bottom: ${Margin_Small};
    & hr {
      opacity: 0.5;
    }
    & p {
      text-align: center;
    }
  }
`;
