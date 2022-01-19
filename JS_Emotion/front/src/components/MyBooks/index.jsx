import useInput from '@hooks/useinput';
import Favorites from '@utils/db';
import axios from 'axios';
import React, { useEffect } from 'react';

function MyBooks() {
  const [mybooks, setMybooks] = useInput([]);
  const [loading, setLoading] = useInput(false);

  async function getFavorites() {
    Favorites.forEach((book) => {
      axios.get(`http://localhost:3085/mybooks/${book}`).then((res) => {
        setMybooks((curr) => {
          console.log(curr);
          curr.push(res.data.items[0]);
          return curr;
        });
      });
    });
  }

  useEffect(() => {
    setLoading(true);
    getFavorites().then(() => setLoading(false));
  }, [setLoading, setMybooks]);

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
