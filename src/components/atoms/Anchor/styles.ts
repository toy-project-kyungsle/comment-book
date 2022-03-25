import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { engFont1 } from '@utils/objects/fonts';

const DetailPageImgDiv = css`
  font-family: ${engFont1};
  position: absolute;
  left: 0;
  bottom: -20;
  text-decoration: none;
  font-size: 12px;
  color: rgb(105, 105, 105);
  width: 60px;
  :hover {
    color: black;
  }
`;

export const Sanchor = styled.a`
  ${(props) => {
    switch (props['data-mode']) {
      case 'DetailPageImgDiv':
        return DetailPageImgDiv;
      default:
        return null;
    }
  }}
`;
