import styled from '@emotion/styled';

const PictureWidth = '235px';
const Margin_Medium = '30px';
const Padding_Small = '20px';

export const BookContainer = styled.div`
  width: ${PictureWidth};
  height: 100%;
  margin: 0 ${Margin_Medium};

  border: none;
  border-radius: 5px;
  overflow: hidden;

  & a {
    width: ${PictureWidth};
  }
`;

export const BookImg = styled.img`
  width: ${PictureWidth};
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
    bottom: ${Margin_Medium};
    & hr {
      opacity: 0.5;
    }
    & p {
      text-align: center;
    }
  }
`;
