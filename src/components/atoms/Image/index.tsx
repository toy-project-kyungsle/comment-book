import React from 'react';
import { Simage } from './styles';

interface Props {
  className: string;
  src: string;
  alt?: string;
  id?: string;
  onClick?: (e: any) => void;
}

function Image(props: Props) {
  const { className, src, alt = null, id, onClick, display } = props;
  return <Simage data-mode={className} src={src} alt={alt} id={id} onClick={onClick}></Simage>;
}

export default Image;
