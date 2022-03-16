import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = css`
  margin-top: 13px;
`;

const HeaderBtn: React.CSSProperties = {
  color: `grey`,
  fontSize: '15px',
  position: 'relative',
  top: '4',
  left: '3',
};

export const Sform = styled.form`
  ${(props) => props['className'] === 'Header' && Header}
`;

export function ButtonImg() {
  return <FontAwesomeIcon icon={faSearch} style={HeaderBtn} />;
}
