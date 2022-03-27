import Span from '@components/atoms/Span';
import React from 'react';
import { LoadAnimation, Wrapper } from './styles';

interface Props {
  loading: boolean;
}

function Loading({ loading }: Props) {
  return (
    <Wrapper data-mode={loading ? 'doing' : 'done'}>
      <div className="container">
        <Span className="Loading">Book Comment</Span>
        <LoadAnimation>
          <div></div>
          <div></div>
          <div></div>
        </LoadAnimation>
      </div>
    </Wrapper>
  );
}

export default Loading;
