import styled from '@emotion/styled';

const PictureWidth = '205px';
const PictureHeight = '300.96px';
const Margin_Small = `${180 / 6}px`;
const Padding_Small = '30px';

export const BookContainer = styled.div`
  width: ${PictureWidth};
  height: ${PictureHeight};
  margin: 0 ${Margin_Small};

  border: none;
  /* border-radius: 5px; */
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
  height: ${PictureHeight};
  padding: ${Padding_Small};
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.3s;

  color: whitesmoke;
  background-color: rgba(179, 182, 183);
  /* border-radius: 5px; */

  &:hover {
    opacity: 1;
  }

  .comment {
    line-height: 300%;
  }
  .rating {
    font-family: 'Roboto', serif;
    width: calc(${PictureWidth} - (2 * ${Padding_Small}));
    position: absolute;
    bottom: ${Margin_Small};
    & hr {
      opacity: 0.8;
    }
    & p {
      font-family: 'Noto Sans KR', sans-serif;
      text-align: center;
    }
  }

  /* @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
`;
