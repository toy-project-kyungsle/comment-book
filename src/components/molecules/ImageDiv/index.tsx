import Img from '@components/atoms/Image';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  onSocialClick: (event: any) => void;
  imgSrc: string;
  DivID?: string;
  DivText?: string;
  children?: any;
}

function ImageDiv(props: Props) {
  const { className, imgSrc, children } = props;
  return (
    <Wrapper data-mode={className}>
      <Img className={className} src={imgSrc} alt="null"></Img>
      {children}
    </Wrapper>
  );
}

export default ImageDiv;
