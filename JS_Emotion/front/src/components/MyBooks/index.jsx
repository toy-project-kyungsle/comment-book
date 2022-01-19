import Favorites from '@utils/db';
import React from 'react';

function MyBooks() {
  // console.log(mybooks);

  return (
    <div>
      {Favorites?.map((book) => {
        console.log(book);
        return <img src={book.coverSmallUrl} alt={book.title} />;
      })}
    </div>
  );
}

export default MyBooks;
