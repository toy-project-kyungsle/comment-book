import { css } from '@emotion/react';
import styled from '@emotion/styled';

const DetailPage = css`
  margin: 7px 0;
`;

const DetailComment = css`
  position: absolute;
  right: 0;
  bottom: -10;

  color: rgb(105, 105, 105);
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`;

const Search = css`
  position: relative;

  text-align: center;

  width: 300px;
  margin: 0 auto;
`;

const SearchClickDiv = css`
  width: 60px;
  :hover {
    cursor: pointer;
    color: grey;
  }
`;

export const Wrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'DetailPage':
        return DetailPage;
      case 'DetailComment':
        return DetailComment;
      case 'Search':
        return Search;
      case 'SearchClickDiv':
        return SearchClickDiv;
      default:
        return null;
    }
  }}
`;
