import { css } from '@emotion/react';
import styled from '@emotion/styled';

const AuthWrapper = css`
  height: 30px;
  margin-bottom: 15px;
`;

const AuthTag = css`
  visibility: visible;
  width: 100px;
  display: inline-block;
  text-align: center;
`;

export const Wrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'AuthInputTag':
        return AuthWrapper;
      default:
        return null;
    }
  }}
`;

export const Tag = styled.div`
  visibility: hidden;
  ${(props) => {
    switch (props['data-mode']) {
      case 'AuthInputTag':
        return AuthTag;
      default:
        return null;
    }
  }}
`;
