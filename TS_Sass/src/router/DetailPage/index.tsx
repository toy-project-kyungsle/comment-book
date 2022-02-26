import useInput from '@hooks/useinput';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, ImgDiv, Letters, Description, BtnDiv, LonglineTextArea, Background } from './styles';
import { dbService, authService } from '@utils/fbase';
import { setDoc, doc, getDoc, deleteField, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FbaseAuth } from '@atom/FbaseAuth';
import Loading from '@components/Loading';
import DetailLetters from '@components/DetailLetters';
import { BookData } from '@utils/types.ts';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState<BookData | {}>({});
  const [bookIsbn, setBookIsbn] = useState(0);
  const [loading, setLoading] = useState(false);

  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortComment, setShortComment, onChangeShortComment] = useInput("There's no comment");
  const [longComment, setLongComment, onCangeLongComment] = useInput('You have no commnet for this book');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);
  const isLoggedIn = useRecoilValue(FbaseAuth('detailpage'));
  const navigate = useNavigate();

  const onClickInfoBtn = useCallback(() => {
    setInfoMode((prev) => !prev);
  }, []);

  const onClickAddEditBtn = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  const onClickCancle = useCallback(() => {
    setEditMode(false);
  }, []);

  const onClickTopBtn = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onClickDelete = useCallback(async () => {
    const ok = window.confirm('정말로 이 후기를 지우시겠습니까?');
    if (ok) {
      const commentRef = doc(dbService, 'UserEval', authService.currentUser.uid);
      await updateDoc(commentRef, {
        [bookIsbn]: deleteField(),
      })
        .then(() => window.alert('삭제 완료'))
        .catch((err) => console.log(err));
    }
  }, [bookIsbn]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await setDoc(
          doc(dbService, `UserEval`, authService.currentUser.uid),
          {
            [bookIsbn]: Object.assign({}, book, {
              rating,
              shortComment,
              longComment,
              editDate: new Date(),
            }),
          },
          { merge: true },
        );
      } catch (error) {
        console.log(error);
      }
      setEditMode(false);
      setInfoMode(false);
    },
    [book, bookIsbn, longComment, rating, shortComment],
  );

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
      {loading ? null :
        <Background>
          <Container>
            <p className="topBtn" onClick={onClickTopBtn}>
              <img
                src="https://user-images.githubusercontent.com/79993356/154732530-9f85dfa4-e9f8-484a-acdf-6371eb981bc5.png"
                alt="null"
              />
            </p>
            <ImgDiv>
              <img src={(book as BookData).coverLargeUrl} alt={(book as BookData).title} />
              <a href={(book as BookData).link} target="_blank">
                More Info?
            </a>
            </ImgDiv>
            <Letters>
              <DetailLetters
                book={book}
                infoMode={infoMode}
                editMode={editMode}
                rating={rating}
                onChangeRating={onChangeRating}
                onChangeShortComment={onChangeShortComment}
                shortComment={shortComment}
              />

              <hr />

              {editMode ? (
                <div style={{ minHeight: '180px' }}>
                  {LonglineTextArea(longComment, onCangeLongComment)}
                  <BtnDiv>
                    <span onClick={onSubmit}>Finish</span>
                    <span onClick={onClickCancle}>Cancle</span>
                  </BtnDiv>
                </div>
              ) : infoMode ? (
                <>
                  <Description>
                    <p>{(book as BookData).description}</p>
                  </Description>
                  <BtnDiv>
                    <span onClick={onClickInfoBtn}>Comment</span>
                  </BtnDiv>
                </>
              ) : (
                    <>
                      <p className="longComment">{longComment}</p>
                      <BtnDiv>
                        <span onClick={onClickInfoBtn}>Info</span>
                        <span onClick={onClickAddEditBtn}>Comment</span>
                        <span onClick={onClickDelete}>Delete</span>
                      </BtnDiv>
                    </>
                  )}
            </Letters>
          </Container>
        </Background>}
    </>
  );
}

export default DetailPage;
