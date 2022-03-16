import React from 'react';
import { Sspan } from './styles';

interface Props {
  className: string;
  children?: any;
}

function Span(props: Props) {
  const { className, children } = props;
  return <Sspan data-mode={className}>{children}</Sspan>;
}

export default Span;
