import React from 'react';
import { Comment } from './styles';

function CommentBox() {
  return (
    <Comment>
      <div>
        <p className="name">Kyunglse</p>
        <p>Nice Book!</p>
      </div>
      <div>
        <p>⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </Comment>
  );
}

export default CommentBox;
