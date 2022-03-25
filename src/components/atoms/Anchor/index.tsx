import React from 'react';
import { Sanchor } from './styles';

interface Props {
  className: string;
  href: string;
  target: string;
  rel: string;
  children: string;
}

function Anchor(props: Props) {
  const { className, href, target, rel, children } = props;
  return (
    <Sanchor data-mode={className} href={href} target={target} rel={rel}>
      {children}
    </Sanchor>
  );
}

export default Anchor;
