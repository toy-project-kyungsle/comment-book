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
  @media (max-width: 768px) {
    width: 250px
  }
`;

const SubmitForm = css`
  height: 25px;
  width: 60px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const Sinput = styled.input`
  ${(props) => {
    switch (props['data-mode']) {
      case 'AuthInput':
        return AuthInput;
      case 'Header':
        return Header;
      case 'MainSearch':
        return MainSearch;
      case 'SubmitForm':
        return SubmitForm;
      default:
        return null;
    }
  }}
  &:focus {
    outline: none;
  }
`;
