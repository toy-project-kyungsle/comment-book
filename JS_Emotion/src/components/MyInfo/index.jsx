import { Container, InfoLetters, Background } from './styles';
import React, { useEffect, useState } from 'react';
import { dbService, authService } from '@utils/fbase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';

function MyInfo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [laoding, setLoading] = useState(true);
  const [bookCount, setBookCount] = useState(0);
  const [bestBook, setBestBook] = useState('인생책이 아직 없습니다..');
  const [bestCategory, setBestCategory] = useState('얘도 없어요..');

  useEffect(() => {
    setLoading(true);
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn) {
        const q = query(collection(dbService, `UserEval`));
        onSnapshot(q, (snapshot) => {
          let dataArr = Object.entries(snapshot.docs[0]?.data());
          if (dataArr.length > 0) {
            dataArr.sort((a, b) => b[1]['rating'] - a[1]['rating']);
            let CategoryObj = {};
            dataArr?.forEach((elem) =>
              CategoryObj[elem[1]['categoryId']]
                ? (CategoryObj[elem[1]['categoryId']] += 1)
                : (CategoryObj[elem[1]['categoryId']] = 1),
            );

            setBestBook(dataArr[0][1]['title']);
            setBookCount(dataArr.length);
            setBestCategory(GetDetailedName(Object.entries(CategoryObj).sort((a, b) => b[1] - a[1])[0][0]));
          }
        });
        setLoading(false);
      }
    });
  }, [isLoggedIn]);

  // console.log(bestCategory);

  return laoding ? (
    <div>loading..</div>
  ) : (
    <Background>
      <p style={{ margin: `0px auto 50px auto`, fontSize: `80px`, fontFamily: "'Rowdies', cursive" }}>
        My Book Collection
      </p>
      <Container>
        <InfoLetters>
          <div className="name">User Name</div>
          <div className="letterBox">
            <div className="title">{'읽은 책수'}</div>
            <div>{bookCount}</div>
            <div className="title">{`Best Book`}</div>
            <div>{bestBook}</div>
            <div className="title">{`Best Category`}</div>
            <div>{bestCategory}</div>
          </div>
        </InfoLetters>
      </Container>
    </Background>
  );
}

export default MyInfo;
