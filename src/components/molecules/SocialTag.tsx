import Img from '@components/atoms/Img';
import React from 'react';
import { FlexDiv } from './styles';

interface Props {
  onSocialClick: (event: any) => void;
  imgSrc: string;
  DivID?: string;
  DivText?: string;
  imgHeight?: string;
  imgWidth?: string;
  imgMagin?: string;
}

function SocialTag(props: Props) {
  const { onSocialClick, imgSrc, imgHeight, imgWidth, imgMagin, DivID, DivText } = props;
  return (
    <FlexDiv>
      <div>
        <Img src={imgSrc} alt="null" height={imgHeight} width={imgWidth} margin={imgMagin}></Img>
      </div>
      <div id={DivID} onClick={onSocialClick}>
        <div>{DivText}</div>
      </div>
    </FlexDiv>
  );
}

export default SocialTag;
