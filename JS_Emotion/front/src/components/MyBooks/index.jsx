import Favorites from '@atom/Favorite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

function MyBooks() {
  const [mybooks] = useRecoilState(Favorites);
  // console.log(`mybooks`);
  // console.log(mybooks);

  return (
    <div>
      {mybooks?.map((book) => {
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
