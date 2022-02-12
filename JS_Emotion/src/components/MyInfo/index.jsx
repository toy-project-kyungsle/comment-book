import { Container, InfoLetters, Background } from './styles';
import React, { useEffect, useState } from 'react';
import { dbService, authService } from '@utils/fbase';
import { getDocs, collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function MyInfo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [laoding, setLoading] = useState(true);
  const [bookCount, setBookCount] = useState(0);
  const [bestBook, setBestBook] = useState('');
  const [bestCategory, setBestCategory] = useState('');

  useEffect(() => {
    setLoading(true);
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn) {
        const q = query(collection(dbService, `UserEval_${authService.currentUser.uid}`), orderBy('rating', 'desc'));
        onSnapshot(q, (snapshot) => {
          setBestBook(snapshot.docs.shift().data().title);
          setBookCount(snapshot.docs.length);
        });
        setLoading(false);
      }
    });
  }, [isLoggedIn]);

  return laoding ? (
    <div>loading..</div>
  ) : (
    <Background>
      <p style={{ margin: `0px auto 50px auto`, fontSize: `80px`, fontFamily: "'Rowdies', cursive" }}>
        My Book Collection
      </p>
      <Container>
        <InfoLetters>
          <div className="name">Kyungsle</div>
          <div className="letterBox">
            <div className="title">{'읽은 책수'}</div>
            <div>{bookCount}</div>
            <div className="title">{`Best Book`}</div>
            <div>{bestBook}</div>
            <div className="title">{`Friends`}</div>
            <div>Jimin Jisookim jaham</div>
          </div>
        </InfoLetters>
      </Container>
    </Background>
  );
}

export default MyInfo;
