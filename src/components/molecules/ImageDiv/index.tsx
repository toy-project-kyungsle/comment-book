import Img from '@components/atoms/Image';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  onSocialClick: (event: any) => void;
  imgSrc: string;
  DivID?: string;
  DivText?: string;
}

function ImageDiv(props: Props) {
  const { className, onSocialClick, imgSrc, DivID, DivText } = props;
  return (
    <Wrapper>
      <div>
        <Img className={className} src={imgSrc} alt="null"></Img>
      </div>
      <div id={DivID} onClick={onSocialClick}>
        <div>{DivText}</div>
      </div>
    </Wrapper>
  );
}

export default ImageDiv;
