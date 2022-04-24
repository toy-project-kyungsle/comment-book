import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Auth_inner = css`
  padding: 0 80px;
  margin-top: 60px;
`;

const Auth_BtnContainer = css`
  position: relative;
  display: flex;
  justify-content: flex-end;

  z-index: 3;

  margin-right: 33px;
  margin-top: 20px;
`;

export const Form = styled.form`
  .inner {
    ${(props) => {
      switch (props['data-mode']) {
        case 'Auth':
          return Auth_inner;
        default:
          return null;
      }
    }}
  }
`;

export const BtnWrapper = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'Auth':
        return Auth_BtnContainer;
      default:
        return null;
    }
  }}
`;
