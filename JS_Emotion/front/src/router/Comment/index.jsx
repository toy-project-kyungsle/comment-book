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
  RightSection,
  ShortView,
  Background,
  LetterGrid,
} from './styles';

function Comment() {
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
                <div>
                  <span></span>
                  <span></span>
                </div>
                <p>
                  {book.author ? (
                    <>
                      <span>author</span>
                      <span>{book.author}</span>
                    </>
                  ) : null}
                </p>
                <p>{`rating ⭐️⭐️⭐️⭐️⭐️ `}</p>
                <p>{book.categoryId ? `genre ${GetDetailedName(book.categoryId)} ` : null}</p>
                <p>{book.pubDate ? `pubdate ${book.pubDate} ` : null}</p>
              </LetterGrid>
            </Letters>
          </ShortView>
          <Description>
            <p>
              {book.description
                ? book.description.length > 800
                  ? `${book.description.slice(0, 800)}...`
                  : book.description
                : null}
            </p>
          </Description>
        </LeftSection>
      </Container>
    </Background>
  );
}

export default Comment;
