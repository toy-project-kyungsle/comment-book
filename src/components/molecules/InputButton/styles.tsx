import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = css`
  margin-top: 13px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderBtn: React.CSSProperties = {
  color: `grey`,
  fontSize: '15px',
  position: 'relative',
  top: '4px',
  left: '3px',
};

const MainPage_Search: React.CSSProperties = {
  color: `grey`,
  fontSize: '20px',
  position: 'relative',
  top: '10px',
  left: '7px',
};

export const Sform = styled.form`
  ${(props) => props['data-mode'] === 'Header' && Header}
`;

export function ButtonImg(className: string) {
  return (
    <FontAwesomeIcon
      icon={(className === 'Header' || className === 'MainPage--Search') && faSearch}
      style={className === 'Header' ? HeaderBtn : className === 'MainPage--Search' ? MainPage_Search : null}
    />
  );
}
