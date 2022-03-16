import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Header = css`
  background: none;
  margin: 0 20px 5px 0;
  border: none;
  cursor: pointer;
`;

const MainSearch = css`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Sbutton = styled.button`
  ${(props) => (props['data-mode'] === 'Header' ? Header : props['data-mode'] === 'MainSearch' ? MainSearch : null)}
`;
