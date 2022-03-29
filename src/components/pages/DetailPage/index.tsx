import useInput from '@hooks/reuUsable/useinput';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, ImgDiv, Letters, Background } from './styles';
import Loading from '@components/organisms/Loading';
import DetailLetters from '@components/organisms/DetailLetters';
import { IbookData } from '@utils/objects/types';
import DetailComment from '@components/organisms/DetailComment';
import Image from '@components/atoms/Image';
import Paragraph from '@components/atoms/Paragraph';
import Anchor from '@components/atoms/Anchor';
import useNavi from '@hooks/reuUsable/useNavi';
import useDetailPage from '@hooks/notReUsable/useDetailPage';

function DetailPage() {
  const { isbn } = useParams();

  const [rating, setRating, onChangeRating] = useInput(0);
  const [shortComment, setShortComment, onChangeShortComment] = useInput("There's no comment");
  const [longComment, setLongComment, onCangeLongComment] = useInput('You have no commnet for this book');
  const [editMode, setEditMode] = useState(false);
  const [infoMode, setInfoMode] = useState(false);
  const navigate = useNavi(-1);

  const [book, loading, bookIsbn] = useDetailPage({ isbn, setRating, setShortComment, setLongComment, setInfoMode });

  return (
    <>
      <Loading loading={loading} />
      {!loading && (
        <Background>
          <Container>
            <Paragraph className="DetailPageTopBtn" onClick={navigate}>
              <Image
                className="DetailPageXBtn"
                src="https://user-images.githubusercontent.com/79993356/154732530-9f85dfa4-e9f8-484a-acdf-6371eb981bc5.png"
                alt="null"
              />
            </Paragraph>
            <ImgDiv>
              <Image className="default" src={(book as IbookData).coverLargeUrl} alt={(book as IbookData).title} />
              <Anchor className="DetailPageImgDiv" href={(book as IbookData).link} target="_blank" rel="noreferrer">
                More Info?
              </Anchor>
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
