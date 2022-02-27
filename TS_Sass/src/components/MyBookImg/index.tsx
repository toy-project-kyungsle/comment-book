import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookContainer, BookImg, Wrap } from './styles';
import { FbookData } from '@utils/types';

interface Props {
  coverImg: string;
  title: string;
  isbn: string;
  shortcomment: string;
  rating: number;
}

function MyBookImg({ coverImg, title, isbn, shortcomment, rating }: Props) {
  const [reload, setReload] = useState('doing');

  useEffect(() => {
    setReload('doing');
    setTimeout(() => {
      setReload('done');
    }, 1000);
  }, [isbn]);

  return (
    <BookContainer data-mode={reload}>
      <Link to={`/comment/${isbn}`}>
        <BookImg src={coverImg} alt={title} />
        <Wrap>
          <p className="comment">{shortcomment}</p>
          <div className="rating">
            <hr />
            <p>{rating ? `Rating : ${rating} / 5` : 'Please Eval'}</p>
          </div>
        </Wrap>
      </Link>
    </BookContainer>
  );
}

export default MyBookImg;
