import Span from '@components/atoms/Span';
import LoadAnimation from '@components/molecules/LoadAnimation';
import React from 'react';
import { Wrapper } from './styles';

interface Props {
  loading: boolean;
}

function Loading({ loading }: Props) {
  return (
    <Wrapper data-mode={loading ? 'doing' : 'done'}>
      <div className="container">
        <Span className="Loading">Book Comment</Span>
        <LoadAnimation />
      </div>
    </Wrapper>
  );
}

export default Loading;
