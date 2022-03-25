import { css } from '@emotion/react';
import styled from '@emotion/styled';

const DetailPage = css`
  resize: none;
  vertical-align: middle;
  :focus {
    outline: none;
  }
`;

const DetailPageRating = css`
  ${DetailPage}
  width: 50px;
  height: 25px;
  padding-left: 10px;
`;

const DetailPageOneline = css`
  ${DetailPage}
  width: 420px;
  height: 55px;
  padding: 10px;
`;

export const StextArea = styled.textarea`
  ${(props) => {
    switch (props['data-mode']) {
      case 'DetailPageRating':
        return DetailPageRating;
      case 'DetailPageOneline':
        return DetailPageOneline;
      default:
        return null;
    }
  }}
`;
