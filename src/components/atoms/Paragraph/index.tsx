import React from 'react';
import { SparaGraph } from './styles';

interface Props {
  className: string;
  children?: string;
  onClick?: (e: any) => void;
}

function Paragraph(props: Props) {
  const { className, children, onClick } = props;
  return (
    <SparaGraph onClick={onClick} data-mode={className}>
      {children}
    </SparaGraph>
  );
}

export default Paragraph;
