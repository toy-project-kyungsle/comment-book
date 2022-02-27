import useInput from '@hooks/useinput';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, ImgDiv, Letters, Background } from './styles';
import { dbService, authService } from '@utils/fbase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';
import Loading from '@components/Loading';
import DetailLetters from '@components/DetailLetters';
import { IbookData } from '@utils/types';
import DetailComment from '@components/DetailComment';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState<IbookData | {}>({});
  const [bookIsbn, setBookIsbn] = useState(0);
  const [loading, setLoading] = useState(false);

  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortComment, setShortComment, onChangeShortComment] = useInput("There's no comment");
  const [longComment, setLongComment, onCangeLongComment] = useInput('You have no commnet for this book');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);
  const isLoggedIn = useRecoilValue(FbaseAuth('detailpage'));
  const navigate = useNavigate();

  const onClickTopBtn = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const getBookInfo = useCallback(async () => {
    if (isLoggedIn) {
      const dbBooks = await (await getDoc(doc(dbService, `UserEval`, authService.currentUser.uid))).data();
      if (!dbBooks[bookIsbn] || !dbBooks) {
        setInfoMode(true);
      } else if (dbBooks) {
        setInfoMode(false);
        setRating(dbBooks[bookIsbn].rating);
        setShortComment(dbBooks[bookIsbn].shortComment);
        setLongComment(dbBooks[bookIsbn].longComment);
      }
    } else {
      setInfoMode(true);
      setRating(0);
      setShortComment("There's no comment");
      setLongComment('You have no commnet for this book');
    }
    setLoading(false);
  }, [bookIsbn, isLoggedIn, setLongComment, setRating, setShortComment]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.interbookserver.kro.kr:3085/isbnsearch/${isbn}`).then((res) => {
      setBook(res.data.items[0]);
      setBookIsbn(res.data.items[0].isbn);
    });
  }, [isbn, setBook, setLoading]);

  useEffect(() => {
    if (Object.keys(book).length) getBookInfo();
  }, [book, getBookInfo, isLoggedIn]);

  return (
    <>
      <Loading loading={loading} />
      {loading ? null : (
        <Background>
          <Container>
            <p className="topBtn" onClick={onClickTopBtn}>
              <img
                src="https://user-images.githubusercontent.com/79993356/154732530-9f85dfa4-e9f8-484a-acdf-6371eb981bc5.png"
                alt="null"
              />
            </p>
            <ImgDiv>
              <img src={(book as IbookData).coverLargeUrl} alt={(book as IbookData).title} />
              <a href={(book as IbookData).link} target="_blank" rel="noreferrer">
                More Info?
              </a>
            </ImgDiv>
            <Letters>
              <DetailLetters
                book={book as IbookData}
                infoMode={infoMode}
                editMode={editMode}
                rating={rating}
                onChangeRating={onChangeRating}
                onChangeShortComment={onChangeShortComment}
                shortComment={shortComment}
              />

              <hr />

              <DetailComment
                shortComment={shortComment}
                longComment={longComment}
                onCangeLongComment={onCangeLongComment}
                book={book as IbookData}
                rating={rating}
                bookIsbn={bookIsbn}
                editMode={editMode}
                setEditMode={setEditMode}
                infoMode={infoMode}
                setInfoMode={setInfoMode}
              />
            </Letters>
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
