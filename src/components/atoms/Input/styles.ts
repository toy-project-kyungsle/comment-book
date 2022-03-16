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

const HeaderInput = css`
  background: none;
  height: 24px;
  width: 130px;
  /* margin: 0px 5px 8px 20px; */
  border: none;
  border-bottom: 1px solid black;
  font-size: 13px;
  text-align: center;
`;

export const Sinput = styled.input`
  ${(props) => (props['data-mode'] === 'AuthInput' ? AuthInput : 'HeaderInput' ? HeaderInput : null)}
  &:focus {
    outline: none;
  }
`;
