import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Loading = css`
  font-weight: 800;
  font-size: 40px;
`;

const MainSearch = css`
  font-size: 22px;
  font-weight: bold;
`;

const SliderTopToggle = css`
  margin-left: 20px;
  color: #0000007b;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

const SliderTopTitle = css`
  font-size: 20px;
`;

export const Sspan = styled.span`
  ${(props) => {
    switch (props['data-mode']) {
      case 'Loading':
        return Loading;
      case 'MainSearch':
        return MainSearch;
      case 'SliderTopToggle':
        return SliderTopToggle;
      case 'SliderTopTitle':
        return SliderTopTitle;
      default:
        return null;
    }
  }}
`;
