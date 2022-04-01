import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SocialLogin = css`
  display: flex;
`;

export const Wrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'SocialLogin':
        return SocialLogin;
      default:
        return null;
    }
  }}
`;
