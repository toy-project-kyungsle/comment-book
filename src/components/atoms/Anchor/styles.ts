import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { engFont1 } from '@utils/objects/fonts';

const BookDetail_outerLink = css`
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
  @media (max-width: 825px) {
    position: unset;
    margin: 0 auto;
    display: block;
  }
`;

const FooterSNS = css`
  font-size: 14px;
  color: grey;
  margin-left: 50px;
  text-decoration: none;

  @media (max-width: 470px) {
    margin: 0;
    margin-right: 30px;
  }
`;

export const Sanchor = styled.a`
  ${(props) => {
    switch (props['data-mode']) {
      case 'BookDetail--outerLink':
        return BookDetail_outerLink;
      case 'FooterSNS':
        return FooterSNS;
      default:
        return null;
    }
  }}
`;
