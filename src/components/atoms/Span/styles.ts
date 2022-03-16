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

export const Sspan = styled.span`
  ${(props) => (props['data-mode'] === 'Loading' ? Loading : 'MainSearch' ? MainSearch : null)}
`;
