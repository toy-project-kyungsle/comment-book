import React from 'react';
import { Link } from 'react-router-dom';
import { BookContainer, BookImg, Wrap } from './styles';

function MyBookImg({ coverImg, title, isbn, shortcomment, rating }) {
  return (
    <BookContainer>
      <Link to={`/comment/${isbn}`}>
        <BookImg src={coverImg} alt={title} />
        <Wrap>
          <p className="comment">{shortcomment}</p>
          <div className="rating">
            <hr />
            <p>{rating ? `Rating : ${rating} / 5` : 'Please Eval'}</p>
          </div>
        </Wrap>
      </Link>
    </BookContainer>
  );
}

export default MyBookImg;
