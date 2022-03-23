import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Header = css`
  margin: 0 20px 5px 0;
`;

const MainSearch = css`
  border: none;
`;

const closeBtn = css`
  /* background-color: none; */
  margin-top: 13px;
`;

const resetBtn = css`
  position: absolute;
  right: 8px;
  bottom: 10px;

  /* background-color: none; */
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
      default:
        return null;
    }
  }}
`;
