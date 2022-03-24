import Span from '@components/atoms/Span';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  className: string;
  firstChild?: string;
  secondChild?: any;
}

function SpanBox(props: Props) {
  const { className, firstChild, secondChild } = props;
  return (
    <Wrapper data-mode={className}>
      <Span className={className + 'tagName'}>{firstChild}</Span>
      <Span className={className + 'Value'}>{secondChild}</Span>
    </Wrapper>
  );
}

export default SpanBox;
