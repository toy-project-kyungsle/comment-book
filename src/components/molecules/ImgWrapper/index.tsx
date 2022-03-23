import Paragraph from '@components/atoms/Paragraph';
import React from 'react';
import { Rating, Wrapper } from './styles';

interface Props {
  className: string;
  shortcomment: string;
  rating: number;
}

function ImgWrapper(props: Props) {
  const { className, shortcomment, rating } = props;
  return (
    <Wrapper data-mode={className}>
      <Paragraph className="MybookImgComment">{shortcomment}</Paragraph>
      <Rating>
        <hr />
        <Paragraph className="MyBookImgRating">{rating ? `Rating : ${rating} / 5` : 'Please Eval'}</Paragraph>
      </Rating>
    </Wrapper>
  );
}

export default ImgWrapper;
