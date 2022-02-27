import { InfoBox, Background, BackgroundImg, TitleBox } from './styles';
import React, { useCallback, useEffect, useState } from 'react';
import { dbService } from '@utils/fbase';
import { collection, query, onSnapshot, DocumentData, Query } from 'firebase/firestore';
import GetDetailedName from '@utils/GetDetailedName';
import Header from '@components/Header';
import { useRecoilValue } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';

interface Props {
  loading: boolean;
  setLoadNum: React.Dispatch<React.SetStateAction<number>>;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function MyInfo({ loading, setLoadNum, setShowLoginModal }: Props) {
  const [bookCount, setBookCount] = useState(0);
  const [bestBook, setBestBook] = useState('No book');
  const [bestCategory, setBestCategory] = useState('No category');
  const isLoggedIn = useRecoilValue(FbaseAuth('myinfo'));
  const [infoLoading, setInfoLoading] = useState(true);

  const getMyInfo = useCallback(async () => {
    const q: Query<DocumentData> = query(collection(dbService, `UserEval`));
    onSnapshot(q, (snapshot) => {
      let dataArr: any[] = Object.entries(snapshot.docs[0]?.data());
      if (dataArr.length > 0) {
        dataArr.sort((a, b) => b[1]['rating'] - a[1]['rating']);
        let CategoryObj: any = {};
        dataArr?.forEach((elem) => {
          if (GetDetailedName(elem[1]['categoryId']) !== '') {
            CategoryObj[elem[1]['categoryId']]
              ? (CategoryObj[elem[1]['categoryId']] += 1)
              : (CategoryObj[elem[1]['categoryId']] = 1);
          }
        });

        setBestBook(dataArr[0][1]['title']);
        setBookCount(dataArr.length);
        setBestCategory(
          GetDetailedName(Number(Object.entries(CategoryObj).sort((a: any, b: any) => b[1] - a[1])[0][0])),
        );
        setInfoLoading(false);
      }
    });
    if (!infoLoading) setLoadNum((prev) => prev + 1);
  }, [infoLoading, setLoadNum]);

  useEffect(() => {
    if (isLoggedIn) getMyInfo();
    else {
      setBookCount(0);
      setBestBook('No book');
      setBestCategory('No category');
      setLoadNum((prev) => prev + 1);
    }
  }, [getMyInfo, isLoggedIn, setLoadNum]);

  return loading ? null : (
    <>
      <Background>
        <BackgroundImg
          src="https://user-images.githubusercontent.com/79993356/154531958-e0068ede-1ae9-4b44-8522-2676c4b8d3ef.png"
          alt="null"
        />
        <div className="positionDiv">
          <Header setShowLoginModal={setShowLoginModal} />
          <TitleBox>
            <p className="title" style={{}}>
              Reading Book is..
            </p>
            <p className="goodMent">
              The reading of all good books is like conversation with the finest men of past Centuries.
            </p>
            <p className="mentor">- Rene Descartes (important scientific thinker)</p>
            <p className="guide">Enjoy reading time with favorite books.</p>
          </TitleBox>
          <InfoBox>
            <div className="title">{'Read'}</div>
            <div className="info">{bookCount}개 읽으셨습니다</div>
            <div className="title">{`Best Book`}</div>
            <div className="info">{bestBook}</div>
            <div className="title">{`Best Category`}</div>
            <div className="info">{bestCategory}</div>
          </InfoBox>
        </div>
      </Background>
    </>
  );
}

export default MyInfo;
