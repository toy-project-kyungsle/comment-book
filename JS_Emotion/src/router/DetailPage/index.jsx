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
} from './styles';
import TextareaAutosize from 'react-textarea-autosize';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [longComment, setLongComment, onCangeLongComment] = useInput('');
  const [editMode, SetEditMode] = useInput(false);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      setLongComment('');
      SetEditMode((prev) => !prev);
    },
    [setLongComment],
  );

  const onClickAddEditBtn = useCallback(() => {
    SetEditMode((prev) => !prev);
  }, [SetEditMode]);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3085/isbnsearch/${isbn}`).then((res) => {
      setBook(res.data.items[0]);
      console.log(res.data.items[0]);
      setLoading(false);
    });
  }, [isbn, setBook, setLoading]);

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
                      <div>작가</div>
                      <div>{book.author}</div>
                    </>
                  ) : null}
                  <div>평점</div>
                  <div>⭐️⭐️⭐️⭐️⭐️</div>
                  {book.categoryId ? (
                    <>
                      <div>장르</div>
                      <div>{GetDetailedName(book.categoryId)}</div>{' '}
                    </>
                  ) : null}
                  {book.pubDate ? (
                    <>
                      <div>출판일</div>
                      <div>{book.pubDate}</div>
                    </>
                  ) : null}
                  <div>한줄 평</div>
                  <div>{editMode ? <OnelineTextArea></OnelineTextArea> : <span>아직 한줄평이 없습니다..</span>}</div>
                </LetterGrid>
              </Letters>
            </ShortView>
            {editMode ? (
              <form onSubmit={onSubmitForm}>
                <TextareaAutosize
                  style={{ width: '100%' }}
                  minRows={10}
                  value={longComment}
                  onChange={onCangeLongComment}
                />
                <div>
                  <SubmitComment>수정완료</SubmitComment>
                </div>
              </form>
            ) : (
              <>
                <p>후기를 남기지 않으셨습니다..😂</p>
                <AddEditBtn onClick={onClickAddEditBtn}>후기 작성 (수정)</AddEditBtn>
              </>
            )}
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
