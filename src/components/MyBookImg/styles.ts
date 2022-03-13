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

  & a {
    width: ${PictureWidth};
    height: 0;
  }

  ${(props) => (props['data-mode'] === 'doing' ? { animation: 'smoothShow 1s ease-in' } : null)};

  @keyframes smoothShow {
    from {
      position: relative;
      bottom: -50px;
      opacity: 0;
    }
    to {
      position: relative;
      bottom: 0px;
      opacity: 1;
    }
  }
`;

export const BookImg = styled.img`
  width: ${PictureWidth};
  height: ${PictureHeight};
  z-index: 100;
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
`;
