import React from 'react';
import { Sbutton } from './styles';

interface Props {
  className: string;
  children: any;
  onClick?: (e: any) => void;
}

function Button(props: Props) {
  const { className, children, onClick } = props;
  return (
    <Sbutton data-mode={className} onClick={onClick}>
      {children}
    </Sbutton>
  );
}

export default Button;
