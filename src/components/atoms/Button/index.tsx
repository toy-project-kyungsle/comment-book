import React from 'react';
import { Sbutton } from './styles';

interface Props {
  children: any;
}

function Button(props: Props) {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
}

export default Button;
