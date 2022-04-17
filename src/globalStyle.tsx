import Font__Kor__Regular from '@utils/fonts/NotoSansKR-Regular.woff';
import Font__Eng1__Regular from '@utils/fonts/Roboto-Regular.ttf';
import Font__Eng2__Regular from '@utils/fonts/OpenSans-Regular.ttf';
import { Global, css } from '@emotion/react';
import React from 'react';

const globalCSS = css`
  body {
    @font-face {
      font-family: 'kor font regular';
      src: url(${Font__Kor__Regular}) format('woff');
      font-display: swap;
    }
    @font-face {
      font-family: 'eng1 font regular';
      src: url(${Font__Eng1__Regular}) format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'eng2 font regular';
      src: url(${Font__Eng2__Regular}) format('truetype');
      font-display: swap;
    }
  }
`;

const getGlobal = () => <Global styles={globalCSS} />;

export default getGlobal;
