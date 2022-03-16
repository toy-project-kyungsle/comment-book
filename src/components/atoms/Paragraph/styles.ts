import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Footer = css`
  font-size: 14px;
  color: grey;
  margin: 0;
  text-align: end;
`;

const HeaderAuth = css`
  font-size: 15px;
  :hover {
    cursor: pointer;
    color: #aca7cb;
  }
`;

export const SparaGraph = styled.p`
  ${(props) => (props['data-mode'] === 'Footer' ? Footer : props['data-mode'] === 'HeaderAuth' ? HeaderAuth : null)}
`;
