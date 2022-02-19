import { InfoBox, Background, BackgroundImg, TitleBox } from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import { dbService, authService } from '@utils/fbase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';
import Header from '@components/Header';
import { useRecoilState } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';

function MyInfo({ loading, setLoadNum, setShowLoginModal }) {
  const [bookCount, setBookCount] = useState(0);
  const [bestBook, setBestBook] = useState("There's no favorite book");
  const [bestCategory, setBestCategory] = useState("There's no favorite category");
  const [isLoggedIn, setisLoggedIn] = useRecoilState(FbaseAuth());

  const getMyInfo = useCallback(
    async (user) => {
      if (user) {
        const q = query(collection(dbService, `UserEval`));
        await onSnapshot(q, (snapshot) => {
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
      }
      setLoadNum((prev) => prev + 1);
    },
    [setLoadNum],
  );

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      getMyInfo(user);
    });
  }, [getMyInfo, setLoadNum]);

  return loading ? null : (
    <>
      <Background>
        <BackgroundImg
          src="https://user-images.githubusercontent.com/79993356/154531958-e0068ede-1ae9-4b44-8522-2676c4b8d3ef.png"
          alt="null"
        />
        <Header isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} setShowLoginModal={setShowLoginModal} />
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
          <div className="title">{'Read'}</div>
          <div className="info">{bookCount}개 읽으셨습니다</div>
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
