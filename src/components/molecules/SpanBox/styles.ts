import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { engFont2, korFont } from '@utils/objects/fonts';

// MyInfo

const MyInfoTiTleBox = css`
  position: absolute;
  left: 50px;
  bottom: 53px;
  width: 320px;

  @media (max-width: 768px) {
    bottom: 200px;
    width: 100%;
    padding-right: 100px;
  }
`

const MyInfoTextBox = css`
  position: absolute;
  right: 50px;
  bottom: 40px;
  height: 15%;

  display: grid;
  grid-template-columns: 150px 120px;
  grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;

  @media (max-width: 768px) {
    left: 50px;
  }
`

// Detail Page

const DetailPage = css`
  margin: 7px 0;
`;

const DetailComment = css`
  font-size: 14px;
  
  position: absolute;
  right: 0;
  bottom: -10;

  color: rgb(105, 105, 105);
`;

// Search Page

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
      case 'MyInfoTiTleBox':
        return MyInfoTiTleBox;
      case 'MyInfoTextBox':
        return MyInfoTextBox;
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
