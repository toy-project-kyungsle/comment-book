import React from 'react';
import { Container } from './styles';

interface Props {
  loading: boolean;
}

function Loading({ loading }: Props) {
  return (
    <Container data-mode={loading ? 'doing' : 'done'}>
      <div className="container">
        <span>Book Comment</span>
        <div className="loadContainer">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default Loading;
