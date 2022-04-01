import React from 'react';
import { Sspan } from './styles';

interface Props {
  className: string;
  id?: string;
  children?: any;
  onClick?: (e: any) => void;
  visibility?: boolean;
}

function Span(props: Props) {
  const { className, id, children, onClick, visibility = true } = props;
  return (
    <Sspan data-mode={className} onClick={onClick} data-visibility={visibility} id={id}>
      {children}
    </Sspan>
  );
}

export default Span;
