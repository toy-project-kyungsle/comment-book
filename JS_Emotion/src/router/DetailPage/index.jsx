import useInput from '@hooks/useinput';
import GetDetailedName from '@utils/GetDetailedName';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import {
  Container,
  Description,
  ImgDiv,
  LeftSection,
  Letters,
  ShortView,
  Background,
  LetterGrid,
  AddEditComment,
} from './styles';

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
            <LeftSection>
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
                        <div>author</div>
                        <div>{book.author}</div>
                      </>
                    ) : null}
                    <div>rating</div>
                    <div>⭐️⭐️⭐️⭐️⭐️</div>
                    {book.categoryId ? (
                      <>
                        <div>genre</div>
                        <div>{GetDetailedName(book.categoryId)}</div>{' '}
                      </>
                    ) : null}
                    {book.pubDate ? (
                      <>
                        <div>pubdate</div>
                        <div>{book.pubDate}</div>
                      </>
                    ) : null}
                  </LetterGrid>
                </Letters>
                <AddEditComment>
                  <button>Add or Edit Comment</button>
                </AddEditComment>
              </ShortView>
              <Description>
                <p>{book.description}</p>
              </Description>
            </LeftSection>
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
