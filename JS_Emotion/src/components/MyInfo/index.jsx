import { InfoBox, Background, BackgroundImg, TitleBox, Container } from './styles';
import React, { useEffect, useState } from 'react';
import { dbService, authService } from '@utils/fbase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';
// @ts-ignore
import backImg from './bookImg.png';
import Header from '@components/Header';

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
            dataArr?.forEach((elem) => {
              if (GetDetailedName(elem[1]['categoryId']) !== '') {
                CategoryObj[elem[1]['categoryId']]
                  ? (CategoryObj[elem[1]['categoryId']] += 1)
                  : (CategoryObj[elem[1]['categoryId']] = 1);
              }
            });

            setBestBook(dataArr[0][1]['title']);
            setBookCount(dataArr.length);
            setBestCategory(GetDetailedName(Object.entries(CategoryObj).sort((a, b) => b[1] - a[1])[0][0]));
          }
        });
        setLoading(false);
      }
    });
  }, [isLoggedIn]);

  return laoding ? (
    <div>loading..</div>
  ) : (
    <>
      <Background>
        <BackgroundImg src={backImg} alt="null" />
        <Header />
        <TitleBox>
          <p className="title" style={{}}>
            My Book Collection
          </p>
          <p className="goodMent">
            The reading of all good books is like conversation with the finest men of past Centuries
          </p>
          <p className="mentor">- Rene Descartes</p>
        </TitleBox>
        <InfoBox>
          <div className="title">{'읽은 책수'}</div>
          <div className="info">{bookCount}개의 책을 읽으셨습니다</div>
          <div className="title">{`Best Book`}</div>
          <div className="info">{bestBook}</div>
          <div className="title">{`Best Category`}</div>
          <div className="info">{bestCategory}</div>
        </InfoBox>
      </Background>
    </>
  );
}

export default MyInfo;
