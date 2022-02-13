import useInput from '@hooks/useinput';
import GetDetailedName from '@utils/GetDetailedName';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  Container,
  ImgDiv,
  Letters,
  ShortView,
  Background,
  LetterGrid,
  OnelineTextArea,
  SubmitComment,
  AddEditBtn,
  Description,
  BtnDiv,
  InfoBtn,
  ExitInfoBtn,
} from './styles';
import TextareaAutosize from 'react-textarea-autosize';
import { dbService, authService } from '@utils/fbase';
import { setDoc, doc, getDoc, deleteField, updateDoc } from 'firebase/firestore';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const [bookIsbn, setBookIsbn] = useState(0);
  const [loading, setLoading] = useState(false);
  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortComment, setShortComment, onChangeShortComment] = useInput('아직 한줄평이 없습니다..');
  const [longComment, setLongComment, onCangeLongComment] = useInput('후기를 남기지 않으셨습니다..😂');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickInfoBtn = useCallback(() => {
    setInfoMode((prev) => !prev);
  }, []);

  const onClickAddEditBtn = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  const onClickCancle = useCallback(() => {
    setEditMode(false);
  }, []);

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
      setRating(dbBooks[bookIsbn]?.rating);
      setShortComment(dbBooks[bookIsbn]?.shortComment);
      setLongComment(dbBooks[bookIsbn]?.longComment);
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

  return (
    <>
      {loading ? (
        <div>Laoding...</div>
      ) : (
        <Background>
          <Container>
            <ShortView>
              <ImgDiv>
                <img src={book.coverLargeUrl} alt={book.title} />
              </ImgDiv>
              <Letters>
                <h3>
                  <a href={book.link}>{book.title}</a>
                </h3>
                <LetterGrid>
                  {book.author ? (
                    <>
                      <div>
                        <div>작가</div>
                      </div>
                      <div>
                        <div>{book.author}</div>
                      </div>
                    </>
                  ) : null}
                  {!infoMode ? (
                    <>
                      <div>
                        <div>평점</div>
                      </div>
                      <div>
                        {editMode ? (
                          <OnelineTextArea onChange={onChangeRating} value={rating}></OnelineTextArea>
                        ) : (
                          <div>{rating}</div>
                        )}
                      </div>
                    </>
                  ) : null}
                  {book.categoryId ? (
                    <>
                      <div>
                        <div>장르</div>
                      </div>
                      <div>
                        <div>{GetDetailedName(book.categoryId)}</div>
                      </div>
                    </>
                  ) : null}
                  {book.pubDate ? (
                    <>
                      <div>
                        <div>출판일</div>
                      </div>
                      <div>
                        <div>{book.pubDate}</div>
                      </div>
                    </>
                  ) : null}
                  {!infoMode ? (
                    <>
                      <div>
                        <div>한줄 평</div>
                      </div>
                      <div>
                        {editMode ? (
                          <OnelineTextArea onChange={onChangeShortComment} value={shortComment}></OnelineTextArea>
                        ) : (
                          <div>{shortComment}</div>
                        )}
                      </div>
                    </>
                  ) : null}
                </LetterGrid>
              </Letters>
            </ShortView>
            {editMode ? (
              <div style={{ minHeight: '180px' }}>
                <TextareaAutosize
                  style={{ width: '100%', marginTop: '10px' }}
                  minRows={10}
                  value={longComment}
                  onChange={onCangeLongComment}
                />
                <BtnDiv>
                  <button onClick={onClickCancle}>취소</button>
                  <SubmitComment onClick={onSubmit}>수정완료</SubmitComment>
                </BtnDiv>
              </div>
            ) : infoMode ? (
              <>
                <Description>
                  <p>{book.description}</p>
                </Description>
                <BtnDiv>
                  <ExitInfoBtn onClick={onClickInfoBtn}>코멘트</ExitInfoBtn>
                </BtnDiv>
              </>
            ) : (
              <>
                <p>{longComment}</p>
                <BtnDiv>
                  <InfoBtn onClick={onClickInfoBtn}>책 정보 보기</InfoBtn>
                  <AddEditBtn onClick={onClickAddEditBtn}>후기 작성 (수정)</AddEditBtn>
                  <button onClick={onClickDelete}>후기 삭제</button>
                </BtnDiv>
              </>
            )}
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
