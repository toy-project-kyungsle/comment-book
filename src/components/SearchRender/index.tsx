import GetDate from '@utils/GetDate';
import { IbookData } from '@utils/types';
import React, { useCallback, useEffect, useState } from 'react';
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
  const [conHeight, setConHeight] = useState('0');
  const [sBackLeft, setSBackLeft] = useState('0');
  const [sBackHeight, setSBackHeight] = useState('0');
  const [sBackWidth, setSBackWidth] = useState('0');
  const [imgLeft, setImgLeft] = useState('0');
  const [imgBottom, setImgBottom] = useState('0');
  const [letterLeft, setLetterLeft] = useState('0');
  const [letterBottom, setLetterBottom] = useState('0');

  const onClickImg = useCallback(() => {
    navigate(`/comment/${book.isbn}`);
  }, [book.isbn, navigate]);

  useEffect(() => {
    setConHeight(
      viewNum === 1 ? '250px' : viewNum === 2 ? '215px' : viewNum === 3 ? '290px' : viewNum === 4 ? '270px' : '0',
    );
    setSBackLeft(
      viewNum === 1 ? '0px' : viewNum === 2 ? '450px' : viewNum === 3 ? '0px' : viewNum === 4 ? '485px' : '0',
    );
    setSBackHeight(
      viewNum === 1 ? '250px' : viewNum === 2 ? '400px' : viewNum === 3 ? '255px' : viewNum === 4 ? '450px' : '0',
    );
    setImgLeft(
      viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '160px' : viewNum === 4 ? '-30px' : '0',
    );
    setSBackWidth(
      viewNum === 1 ? '350px' : viewNum === 2 ? '350px' : viewNum === 3 ? '290px' : viewNum === 4 ? '315px' : '0',
    );
    setImgBottom(
      viewNum === 1 ? '80px' : viewNum === 2 ? '85px' : viewNum === 3 ? '70px' : viewNum === 4 ? '137px' : '0',
    );
    setLetterLeft(
      viewNum === 1 ? '90px' : viewNum === 2 ? '92px' : viewNum === 3 ? '70px' : viewNum === 4 ? '58px' : '0',
    );
    setLetterBottom(
      viewNum === 1 ? '26px' : viewNum === 2 ? '26px' : viewNum === 3 ? '20px' : viewNum === 4 ? '45px' : '0',
    );
  }, [viewNum]);

  return (
    <Container data-Height={conHeight} data-num={viewNum}>
      <SmallBackGround data-Height={sBackHeight} data-Width={sBackWidth} data-Left={sBackLeft}>
        <ImgDiv data-Left={imgLeft} data-Bottom={imgBottom}>
          <img src={book.coverLargeUrl} alt={book.title} onClick={onClickImg} />
        </ImgDiv>
        <LetterDiv data-Left={letterLeft} data-Bottom={letterBottom}>
          <p className="title">
            {book.title.length < 22 ? book.title : book.title.length >= 22 ? book.title.slice(0, 22) + '...' : null}
          </p>
          <p className="moreinfo">
            {book.author ? book.author : book.pubDate ? GetDate(book.pubDate) : book.publisher}
          </p>
        </LetterDiv>
      </SmallBackGround>
      {viewNum === EndNum ? children : null}
    </Container>
  );
}

export default SearchRender;
