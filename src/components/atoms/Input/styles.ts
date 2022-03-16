import styled from '@emotion/styled';
import { css } from '@emotion/react';

const AuthInput = css`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  border: none;
  border-bottom: 1px solid;
  width: 200px;
  text-align: center;
`;

const Header = css`
  background: none;
  height: 24px;
  width: 130px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 13px;
  text-align: center;
`;

const MainSearch = css`
  background: none;
  height: 40px;
  width: 400px;
  margin-left: 35px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 15px;
  text-align: center;
`;

export const Sinput = styled.input`
  ${(props) =>
    props['data-mode'] === 'AuthInput'
      ? AuthInput
      : props['data-mode'] === 'Header'
      ? Header
      : props['data-mode'] === 'MainSearch'
      ? MainSearch
      : null}
  &:focus {
    outline: none;
  }
`;
