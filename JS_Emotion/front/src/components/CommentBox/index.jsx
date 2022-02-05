import React from 'react';
import { Comment } from './styles';

function CommentBox() {
  return (
    <Comment>
      <div>
        <p className="name">No one Comment</p>
        <p>Please Comment Here!</p>
      </div>
      <div>{/* <p>⭐️⭐️⭐️⭐️⭐️</p> */}</div>
    </Comment>
  );
}

export default CommentBox;
