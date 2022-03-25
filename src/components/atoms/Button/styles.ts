import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Header = css`
  margin: 0 20px 5px 0;
`;

const MainSearch = css`
  border: none;
`;

const closeBtn = css`
  margin-top: 13px;
`;

const resetBtn = css`
  position: absolute;
  right: 8px;
  bottom: 10px;
`;

const MainSlider = css`
  position: absolute;
  bottom: -10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #00000050;
  opacity: 0.8;
  font-size: 30px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const MainSliderLeft = css`
  ${MainSlider}
  right: 230px;
`;

const MainSliderRight = css`
  ${MainSlider}
  right: 190px;
`;

const Search = css`
  position: absolute;
  left: -260px;
  bottom: -3px;
  background-color: white;
  :hover {
    transform: scale(1.1);
  }
`;

export const Sbutton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  ${(props) => {
    switch (props['data-mode']) {
      case 'Header':
        return Header;
      case 'MainSearch':
        return MainSearch;
      case 'closeBtn':
        return closeBtn;
      case 'resetBtn':
        return resetBtn;
      case 'MainSliderLeft':
        return MainSliderLeft;
      case 'MainSliderRight':
        return MainSliderRight;
      case 'Search':
        return Search;
      default:
        return null;
    }
  }}
`;
