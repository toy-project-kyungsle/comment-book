import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Auth

const Auth = css`
  margin-top: 30px;
  text-align: center;
`;

// MyInfo

const Main__Info__TiTleBox = css`
  position: absolute;
  left: 50px;
  bottom: 53px;
  width: 320px;

  @media (max-width: 768px) {
    bottom: 200px;
    width: 100%;
    padding-right: 100px;
  }
`;

const Main__Info__TextBox = css`
  position: absolute;
  right: 50px;
  bottom: 40px;
  height: 15%;

  display: grid;
  grid-template-columns: 150px 120px;
  grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;

  @media (max-width: 768px) {
    bottom: 40px;
    left: 50px;
  }
`;

// Slider

const SliderSelected = css`
  margin-right: 15px;
  padding-bottom: 5;

  border-bottom: 1px solid #00000030;
`;

const SliderFilterModal = css`
  width: 120px;
  font-size: 14px;

  display: table;
  text-align: center;
`;

// Detail Page

const DetailPage = css`
  margin: 7px 0;
`;

const DetailComment = css`
  font-size: 14px;

  position: absolute;
  right: 0;
  bottom: -26;

  color: rgb(105, 105, 105);
  @media (max-width: 825px) {
    right: 30px;
  }
`;

// Search Page

const Search = css`
  position: relative;

  text-align: center;

  width: 300px;
  margin: 0 auto;
  @media (max-width: 800px) {
    position: unset;
  }
`;

const SearchClickDiv = css`
  width: 60px;
  :hover {
    cursor: pointer;
    color: grey;
  }
`;

// Footer

const Footer = css`
  margin: 15px 0;
`;

export const Wrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'Auth':
        return Auth;
      case 'Main--Info--TitleBox':
        return Main__Info__TiTleBox;
      case 'Main--Info--TextBox':
        return Main__Info__TextBox;
      case 'SliderSelected':
        return SliderSelected;
      case 'SliderFilterModal':
        return SliderFilterModal;
      case 'DetailPage':
        return DetailPage;
      case 'DetailComment':
        return DetailComment;
      case 'Search':
        return Search;
      case 'SearchClickDiv':
        return SearchClickDiv;
      case 'Footer':
        return Footer;
      default:
        return null;
    }
  }}
`;
