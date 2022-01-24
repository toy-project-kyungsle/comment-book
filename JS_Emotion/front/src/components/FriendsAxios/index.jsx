import React, { useCallback, useEffect, useState } from 'react';
import FriendsData from '@atom/FriendsData';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { BookImg, BookList } from './styles';
import { Link } from 'react-router-dom';

function FriendsAxios() {
  const [friend] = useRecoilState(FriendsData);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  let count = 1;

  // console.log(friend['jimin'].topfive);

  const getBook = useCallback(() => {
    axios
      .get(`http://localhost:3085/isbnsearch/${friend[`jimin`].topfive[count]}`)
      .then((res) => {
        setBooks((curr) => {
          curr.push(res.data.items[0]);
          return curr;
        });
        // console.log(res.data.items[0]);
        count += 1;
        if (count <= 4) getBook();
        if (count === 5) setLoading(false);
      })
      .catch((error) => console.dir(error));
  }, [count, friend]);

  useEffect(() => {
    setLoading(true);
    getBook();
  }, [friend, getBook]);

  return (
    <>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <BookList>
          {books.map((book) => (
            <BookImg>
              <Link to={`/detailpage/${book.isbn}`}>
                <img src={book.coverLargeUrl} alt={book.title}></img>
              </Link>
            </BookImg>
          ))}
        </BookList>
      )}
    </>
  );
}

export default FriendsAxios;
