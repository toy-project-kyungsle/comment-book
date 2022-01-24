import React from 'react';
import { Link } from 'react-router-dom';
import { HotNewBookContainer, HotNewBookImg, MyBookContainer, MyBookImg } from './styles';

function MyBooks({ coverImg, title, isbn, type }) {
  return (
    <>
      {type === 'MyBooks' ? (
        <MyBookContainer>
          <Link to={`/detailpage/${isbn}`}>
            <MyBookImg src={coverImg} alt={title} />
          </Link>
        </MyBookContainer>
      ) : type === 'HotNewBooks' ? (
        <HotNewBookContainer>
          <Link to={`/detailpage/${isbn}`}>
            <HotNewBookImg src={coverImg} alt={title} />
          </Link>
        </HotNewBookContainer>
      ) : null}
    </>
  );
}

export default MyBooks;
