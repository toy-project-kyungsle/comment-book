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

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [longComment, setLongComment, onCangeLongComment] = useInput('');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      setLongComment('');
      setEditMode(false);
      setInfoMode(false);
    },
    [setLongComment],
  );

  const onClickInfoBtn = useCallback(() => {
    setInfoMode((prev) => !prev);
  }, []);

  const onClickAddEditBtn = useCallback(() => {
    setEditMode((prev) => !prev);
  }, []);

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
                    <div>⭐️⭐️⭐️⭐️⭐️</div>
                  </div>
                  {book.categoryId ? (
                    <>
                      <div>
                        <div>장르</div>
                      </div>
                      <div>
                        <div>{GetDetailedName(book.categoryId)}</div>
                      </div>{' '}
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
                  <div>{editMode ? <OnelineTextArea></OnelineTextArea> : <div>아직 한줄평이 없습니다..</div>}</div>
                </LetterGrid>
              </Letters>
            </ShortView>
            {editMode ? (
              <form onSubmit={onSubmitForm} style={{ minHeight: '180px' }}>
                <TextareaAutosize
                  style={{ width: '100%', marginTop: '10px' }}
                  minRows={10}
                  value={longComment}
                  onChange={onCangeLongComment}
                />
                <div>
                  <SubmitComment>수정완료</SubmitComment>
                </div>
              </form>
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
                <p>후기를 남기지 않으셨습니다..😂</p>
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
