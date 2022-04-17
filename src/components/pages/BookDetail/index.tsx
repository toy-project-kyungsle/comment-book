import useInput from '@hooks/reuUsable/useinput';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, BookInfo, Background } from './styles';
import Loading from '@components/organisms/Others/Loading';
import Letters from '@components/organisms/BookDetail/Letters';
import { IbookData } from '@utils/objects/types';
import Comments from '@components/organisms/BookDetail/Comments';
import Image from '@components/atoms/Image';
import Anchor from '@components/atoms/Anchor';
import useNavi from '@hooks/reuUsable/useNavi';
import useDetailPage from '@hooks/notReUsable/useDetailPage';
import ImageBox from '@components/molecules/ImageBox';
import Xbtn from '@utils/images/xmark_grey.webp';

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
            <Image className="BookDetail--Xbtn" src={Xbtn} alt="null" onClick={navigate} />
            <ImageBox className="BookDetail" src={(book as IbookData).coverLargeUrl} alt={(book as IbookData).title}>
              <Anchor
                className="BookDetail--outerLink"
                href={(book as IbookData).link}
                target="_blank"
                rel="noreferrer"
              >
                More Info?
              </Anchor>
            </ImageBox>
            <BookInfo>
              <Letters
                book={book as IbookData}
                infoMode={infoMode}
                editMode={editMode}
                rating={rating}
                onChangeRating={onChangeRating}
                onChangeShortComment={onChangeShortComment}
                shortComment={shortComment}
              />
              <hr />
              <Comments
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
            </BookInfo>
          </Container>
        </Background>
      )}
    </>
  );
}

export default DetailPage;
