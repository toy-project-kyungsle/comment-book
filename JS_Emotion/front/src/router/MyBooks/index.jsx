import useInput from '@hooks/useinput';
import Favorites from '@utils/db';
import axios from 'axios';
import React, { useEffect } from 'react';

function MyBooks() {
  const [mybooks, setMybooks] = useInput([]);
  const [loading, setLoading] = useInput(false);

  useEffect(() => {
    setLoading(true);
    Favorites.forEach((book) => {
      axios.get(`http://localhost:3085/mybooks/${book}`).then((res) => {
        setMybooks((curr) => {
          console.log(curr);
          curr.push(res.data.items[0]);
          return curr;
        });
        // console.log(res.data.items);
        // console.log(mybooks[0]);
        setLoading(false);
      });
    });
  }, [mybooks, setLoading, setMybooks]);

  // console.log(mybooks);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {mybooks.map((book) => (
            <img src={book.coverSmallUrl} alt={book.title}></img>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBooks;
