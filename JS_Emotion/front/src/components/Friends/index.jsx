import FriendsData from '@atom/FriendsData';
import FriendsAxios from '@components/FriendsAxios';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Container, CurrentBook, CurrentImg, CurrentLetter, FriendName, OnePickWrapper } from './styles';

function Friends() {
  const [friend] = useRecoilState(FriendsData);
  const [loading, setLoading] = useState(false);
  const [friendBook, setFriendBook] = useState({});
  // console.log(friend[`jimin`]);
  // console.log(Object.entries(friend).sort((a, b) => a[1].update - b[1].update));

  useEffect(() => {
    setLoading(true);
    if (friend[`jimin`]) {
      axios
        .get(`http://localhost:3085/isbnsearch/${friend[`jimin`].onepickISBN}`)
        .then((res) => {
          setFriendBook(res.data.items[0]);
          // console.log(res.data.items[0]);
          setLoading(false);
        })
        .catch((error) => console.dir(error));
    }
  }, [friend]);

  return (
    <>
      {loading || !friend[`jimin`] || !Object.keys(friendBook).length ? (
        <div>Loading..</div>
      ) : (
        <Container>
          <FriendName>{`jimin`}</FriendName>
          <OnePickWrapper>
            <CurrentBook>
              <CurrentImg>
                <Link to={`/detailpage/${friendBook.isbn}`}>
                  <img src={friendBook.coverLargeUrl} alt={friendBook.title}></img>
                </Link>
              </CurrentImg>
              <CurrentLetter>
                <p className="title">{friendBook.title}</p>
                <p>{friendBook.author}</p>
                <p>{friend['jimin'].eval[friendBook.isbn].comment}</p>
                <p>{`rating: ${friend['jimin'].eval[friendBook.isbn].rating}`}</p>
                <FriendsAxios />
              </CurrentLetter>
            </CurrentBook>
          </OnePickWrapper>
        </Container>
      )}
    </>
  );
}

export default Friends;
