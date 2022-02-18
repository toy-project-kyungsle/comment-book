import useInput from '@hooks/useinput';
import GetDetailedName from '@utils/GetDetailedName';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, ImgDiv, Letters, Background, OnelineTextArea, Description, BtnDiv } from './styles';
import TextareaAutosize from 'react-textarea-autosize';
import { dbService, authService } from '@utils/fbase';
import { setDoc, doc, getDoc, deleteField, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const [bookIsbn, setBookIsbn] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortComment, setShortComment, onChangeShortComment] = useInput("There's no comment");
  const [longComment, setLongComment, onCangeLongComment] = useInput('You have no commnet for this book');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    navigate('/');
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
              editDate: Date(),
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
    const dbBooks = await (await getDoc(doc(dbService, `UserEval`, authService.currentUser.uid))).data();
    if (!dbBooks[bookIsbn] || !dbBooks) {
      setInfoMode(true);
    } else if (dbBooks) {
      setRating(dbBooks[bookIsbn].rating);
      setShortComment(dbBooks[bookIsbn].shortComment);
      setLongComment(dbBooks[bookIsbn].longComment);
    }
    setLoading(false);
  }, [bookIsbn, setLongComment, setRating, setShortComment]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/isbnsearch/${isbn}`).then((res) => {
      setBook(res.data.items[0]);
      setBookIsbn(res.data.items[0].isbn);
    });
  }, [isbn, setBook, setLoading]);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      if (isLoggedIn && Object.keys(book).length) getBookInfo();
    });
  }, [isLoggedIn, book, getBookInfo]);

  return loading ? (
    <div>Laoding...</div>
  ) : (
    <Background>
      <Container>
        <p className="topBtn" onClick={onClickTopBtn}>
          <img
            src="https://user-images.githubusercontent.com/79993356/154732530-9f85dfa4-e9f8-484a-acdf-6371eb981bc5.png"
            alt="null"
          />
        </p>
        <ImgDiv>
          <img src={book.coverLargeUrl} alt={book.title} />
        </ImgDiv>
        <Letters>
          <p className="title">
            <a href={book.link}>{book.title}</a>
          </p>
          {book.author ? (
            <div className="infoDiv">
              <span className="tagName">작가&emsp;</span>
              <span>{book.author}</span>
            </div>
          ) : null}
          {book.categoryId ? (
            <div className="infoDiv">
              <span className="tagName">장르&emsp;</span>
              <span>{GetDetailedName(book.categoryId)}</span>
            </div>
          ) : null}
          {book.pubDate ? (
            <div className="infoDiv">
              <span className="tagName">출판일</span>
              <span>{book.pubDate}</span>
            </div>
          ) : null}
          {!infoMode ? (
            <div className="infoDiv">
              <span className="tagName">평점&emsp;</span>
              {editMode ? (
                <OnelineTextArea onChange={onChangeRating} value={rating}></OnelineTextArea>
              ) : (
                <span>{rating}</span>
              )}
            </div>
          ) : null}
          {!infoMode ? (
            <div className="infoDiv">
              <span className="tagName">한줄평</span>
              {editMode ? (
                <OnelineTextArea onChange={onChangeShortComment} value={shortComment}></OnelineTextArea>
              ) : (
                <span>{shortComment}</span>
              )}
            </div>
          ) : null}

          <hr />

          {editMode ? (
            <div style={{ minHeight: '180px' }}>
              <TextareaAutosize
                style={{ width: '100%', marginTop: '10px' }}
                minRows={10}
                value={longComment}
                onChange={onCangeLongComment}
              />
              <BtnDiv>
                <span onClick={onSubmit}>Finish</span>
                <span onClick={onClickCancle}>Cancle</span>
              </BtnDiv>
            </div>
          ) : infoMode ? (
            <>
              <Description>
                <p>{book.description}</p>
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
    </Background>
  );
}

export default DetailPage;
