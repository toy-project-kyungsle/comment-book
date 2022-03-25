import Image from '@components/atoms/Image';
import Paragraph from '@components/atoms/Paragraph';
import useSearchPosition from '@hooks/notReUsable/useSearchPosition';
import GetDate from '@utils/funtions/GetDate';
import { IbookData } from '@utils/objects/types';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ImgDiv, LetterDiv, SmallBackGround } from './styles';

interface Props {
  children: any;
  book: IbookData;
  viewNum: number;
  EndNum: number;
}

function SearchRender({ children, book, viewNum, EndNum }: Props) {
  const navigate = useNavigate();
  const [conHeight, sBackLeft, sBackHeight, sBackWidth, imgLeft, imgBottom, letterLeft, letterBottom] =
    useSearchPosition(viewNum);

  const onClickImg = useCallback(() => {
    navigate(`/comment/${book.isbn}`);
  }, [book.isbn, navigate]);

  return (
    <Container data-Height={conHeight} data-num={viewNum}>
      <SmallBackGround data-Height={sBackHeight} data-Width={sBackWidth} data-Left={sBackLeft}>
        <ImgDiv data-Left={imgLeft} data-Bottom={imgBottom}>
          <Image className="SearchRender" src={book.coverLargeUrl} alt={book.title} onClick={onClickImg} />
        </ImgDiv>
        <LetterDiv data-Left={letterLeft} data-Bottom={letterBottom}>
          <Paragraph className="SearchRenderTitle">
            {book.title.length < 22 ? book.title : book.title.length >= 22 ? book.title.slice(0, 22) + '...' : null}
          </Paragraph>
          <Paragraph className="SearchRenderInfo">
            {book.author ? book.author : book.pubDate ? GetDate(book.pubDate) : book.publisher}
          </Paragraph>
        </LetterDiv>
      </SmallBackGround>
      {viewNum === EndNum && children}
    </Container>
  );
}

export default SearchRender;
