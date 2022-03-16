import React from 'react';
import { css } from '@emotion/css';

interface Props {
  href: string;
  target: string;
  rel: string;
  children: string;
}

function Anchor(props: Props) {
  const { href, target, rel, children } = props;
  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

export default Anchor;
