import styled from '@emotion/styled';
import { Margin_Small, Padding_Small, PictureHeight, PictureWidth } from '@components/molecules/LinkImage/styles';

export const Wrapper = styled.div`
  font-family: 'Roboto', serif;

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
`;

export const Rating = styled.div`
  width: calc(${PictureWidth} - (2 * ${Padding_Small}));
  position: absolute;
  bottom: ${Margin_Small};
  & hr {
    opacity: 0.8;
  }
`;
