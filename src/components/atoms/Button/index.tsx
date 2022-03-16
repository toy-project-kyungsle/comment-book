import React from 'react';
import { Sbutton } from './styles';

interface Props {
  className: string;
  children: any;
}

function Button(props: Props) {
  const { className, children } = props;
  return <Sbutton data-mode={className}>{children}</Sbutton>;
}

export default Button;
