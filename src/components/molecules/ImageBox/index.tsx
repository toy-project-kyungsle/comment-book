import Image from '@components/atoms/Image';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  src: string;
  alt?: string;
  onSocialClick?: (event: any) => void;
  children?: any;
}

function ImageBox(props: Props) {
  const { className, src, alt = className, onSocialClick, children } = props;
  return (
    <Wrapper data-mode={className}>
      <Image className={className} src={src} alt={alt} onClick={onSocialClick}></Image>
      {children}
    </Wrapper>
  );
}

export default ImageBox;
