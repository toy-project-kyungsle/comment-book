import Image from '@components/atoms/Image';
import Paragraph from '@components/atoms/Paragraph';
import useSearchPosition from '@hooks/notReUsable/useSearchPosition';
import GetDate from '@utils/funtions/GetDate';
import { IbookData } from '@utils/objects/types';
import React, { useCallback } from 'react';
import { Container, ImgDiv, LetterDiv, SmallBackGround } from './styles';
import useNavi from '@hooks/reuUsable/useNavi';

interface Props {
  children: any;
  book: IbookData;
  viewNum: number;
  EndNum: number;
}

function SearchRender({ children, book, viewNum, EndNum }: Props) {
  const navigate = useNavi(`/comment/${book.isbn}`);
  const [conHeight, sBackRight, sBackLeft, sBackHeight, sBackWidth, imgLeft, imgBottom, letterLeft, letterBottom] =
    useSearchPosition(viewNum);

  const onClickImg = useCallback(() => {
    if (book.isbn) navigate();
    else alert('해당 상품은 이제 존재하지 않습니다!');
  }, [book.isbn, navigate]);

  return (
    <Container data-height={conHeight} data-num={viewNum}>
      <SmallBackGround data-height={sBackHeight} data-width={sBackWidth} data-left={sBackLeft} data-right={sBackRight}>
        <ImgDiv data-left={imgLeft} data-bottom={imgBottom}>
          <Image className="SearchRender" src={book.coverLargeUrl} alt={book.title} onClick={onClickImg} />
        </ImgDiv>
        <LetterDiv data-left={letterLeft} data-bottom={letterBottom}>
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
