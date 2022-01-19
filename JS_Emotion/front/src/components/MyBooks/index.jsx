import Favorites from '@utils/db';
import React from 'react';
import { Link } from 'react-router-dom';

function MyBooks() {
  // console.log(mybooks);

  return (
    <div>
      {Favorites?.map((book) => {
        // console.log(book);
        return (
          <Link to={`/detailpage/${book.isbn}`}>
            <img src={book.coverSmallUrl} alt={book.title} />
          </Link>
        );
      })}
    </div>
  );
}

export default MyBooks;
