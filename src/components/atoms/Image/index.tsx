import React from 'react';
import { Simage } from './styles';

interface Props {
  className: string;
  src: string;
  alt?: string;
  id?: string;
}

function Image(props: Props) {
  const { className, src, alt = null, id } = props;
  return <Simage data-mode={className} src={src} alt={alt} id={id}></Simage>;
}

export default Image;
