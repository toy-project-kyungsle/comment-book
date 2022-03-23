import React from 'react';
import { Sspan } from './styles';

interface Props {
  className: string;
  children?: any;
  onClick?: (e: any) => void;
}

function Span(props: Props) {
  const { className, children, onClick } = props;
  return (
    <Sspan data-mode={className} onClick={onClick}>
      {children}
    </Sspan>
  );
}

export default Span;
