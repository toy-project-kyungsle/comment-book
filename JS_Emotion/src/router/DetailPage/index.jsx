import useInput from '@hooks/useinput';
import GetDetailedName from '@utils/GetDetailedName';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  Container,
  ImgDiv,
  Letters,
  ShortView,
  Background,
  LetterGrid,
  AddEditComment,
  OnelineTextArea,
} from './styles';
import TextareaAutosize from 'react-textarea-autosize';

function DetailPage() {
  const { isbn } = useParams();
  const [book, setBook] = useInput({});
  const [loading, setLoading] = useInput(false);

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
                  <div>
                    <OnelineTextArea></OnelineTextArea>
                  </div>
                </LetterGrid>
              </Letters>
            </ShortView>
            <TextareaAutosize style={{ width: '100%' }} minRows={10} />
            <AddEditComment>
              <button>Add or Edit Comment</button>
            </AddEditComment>
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
