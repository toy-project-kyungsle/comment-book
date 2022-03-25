import React from 'react';
import { Sspan } from './styles';

interface Props {
  className: string;
  children?: any;
  onClick?: (e: any) => void;
  visibility?: boolean;
}

function Span(props: Props) {
  const { className, children, onClick, visibility = true } = props;
  return (
    <Sspan data-mode={className} onClick={onClick} data-visibility={visibility}>
      {children}
    </Sspan>
  );
}

export default Span;
