import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SocialLogin = css`
  display: flex;
`;

const BookDetail = css`
  position: relative;
  height: 280px;
  float: left;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.22);
  @media (max-width: 825px) {
    text-align: center;
    box-shadow: unset;
    margin-top: 50px;
  }
`;

export const Wrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'SocialLogin':
        return SocialLogin;
      case 'BookDetail':
        return BookDetail;
      default:
        return null;
    }
  }}
`;
