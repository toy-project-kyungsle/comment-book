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

  @media (max-width: 470px) {
    margin: 0;
  }
`;

export { PictureWidth, PictureHeight, Margin_Small, Padding_Small };
