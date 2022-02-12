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
import { setDoc, doc, getDoc } from 'firebase/firestore';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortcomment, setShortComment, onChangeShortComment] = useInput('아직 한줄평이 없습니다..');
  const [longComment, setLongComment, onCangeLongComment] = useInput('후기를 남기지 않으셨습니다..😂');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);

  const onClickInfoBtn = useCallback(() => {
    setInfoMode((prev) => !prev);
  }, []);

  const onClickAddEditBtn = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(dbService, 'BookEvals', book.isbn), {
        userID: authService.currentUser.uid,
        rating,
        longComment,
        shortcomment,
        edittedAt: Date.now(),
      });
    } catch (error) {
      console.log(error);
    }
    setEditMode(false);
    setInfoMode(false);
  };

  const getBookInfo = async () => {
    const dbBooks = await (await getDoc(doc(dbService, 'BookEvals', book.isbn))).data();
    if (dbBooks) {
      setRating(dbBooks.rating);
      setShortComment(dbBooks.shortcomment);
      setLongComment(dbBooks.longComment);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/isbnsearch/${isbn}`).then((res) => {
      setBook(res.data.items[0]);
    });
  }, [isbn, setBook, setLoading]);

  useEffect(() => {
    if (Object.keys(book).length) getBookInfo();
  }, [book]);

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
                  <div>
                    <div>평점</div>
                  </div>
                  <div>
                    <div>
                      <div>
                        {editMode ? (
                          <OnelineTextArea onChange={onChangeRating} value={rating}></OnelineTextArea>
                        ) : (
                          <div>{rating}</div>
                        )}
                      </div>
                    </div>
                  </div>
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
                  <div>
                    <div>한줄 평</div>
                  </div>
                  <div>
                    {editMode ? (
                      <OnelineTextArea onChange={onChangeShortComment} value={shortcomment}></OnelineTextArea>
                    ) : (
                      <div>{shortcomment}</div>
                    )}
                  </div>
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
                <div>
                  <SubmitComment onClick={onSubmit}>수정완료</SubmitComment>
                </div>
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
