import React from 'react';
import { Link } from 'react-router-dom';
import { BookContainer, Img } from './styles';

function MyBooks({ coverImg, title, isbn }) {
  return (
    <BookContainer>
      <Link to={`/detailpage/${isbn}`}>
        <Img src={coverImg} alt={title} />
      </Link>
    </BookContainer>
  );
}

export default MyBooks;
