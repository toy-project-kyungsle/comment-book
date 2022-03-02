import { InfoBox, Background, BackgroundImg, TitleBox, MoreBackgroundImg } from './styles';
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
        <MoreBackgroundImg />
        <BackgroundImg />
        <div className="positionDiv">
          <Header setShowLoginModal={setShowLoginModal} />
          <TitleBox>
            <p className="title" style={{}}>
              How to use
            </p>
            <p className="hello">오늘도 Book Comment를 찾아주셔서 감사합니다.</p>
            <p className="guide">
              원하시는 책을 검색해 후기를 달아보세요. 내가 읽었던 책들도 보여준답니다. 책을 검색해보세요!
            </p>
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
