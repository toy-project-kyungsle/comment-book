import React from 'react';
import { Link } from 'react-router-dom';
import { BookContainer, BookImg } from './styles';

function HotNewBookImg({ coverImg, title, isbn }) {
  return (
    <BookContainer>
      <Link to={`/detailpage/${isbn}`}>
        <BookImg src={coverImg} alt={title} />
      </Link>
    </BookContainer>
  );
}

export default HotNewBookImg;
