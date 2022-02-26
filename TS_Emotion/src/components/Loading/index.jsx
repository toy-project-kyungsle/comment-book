import React from 'react';
import { Container } from './styles';

function Loading({ loading }) {
  return (
    <Container mode={loading ? 'doing' : 'done'}>
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
