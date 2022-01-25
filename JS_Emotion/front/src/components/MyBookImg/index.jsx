import useInput from '@hooks/useinput';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BookContainer, BookImg, Wrap } from './styles';
import Favorites from '@atom/Favorite';

function MyBookImg({ coverImg, title, isbn, shortcomment, rating }) {
  const [FavoriteBook] = useRecoilState(Favorites);
  const [wrapDisplay, setWrapDisplay] = useInput('none');

  const onMouseOverImg = useCallback(() => {
    setWrapDisplay('block');
  }, [setWrapDisplay]);

  const onMouseOutImg = useCallback(() => {
    setWrapDisplay('none');
  }, [setWrapDisplay]);

  return (
    <BookContainer>
      <Link to={`/detailpage/${isbn}`}>
        <BookImg src={coverImg} alt={title} onMouseOver={onMouseOverImg} onMouseOut={onMouseOutImg} />
        <Wrap wrapDisplay={wrapDisplay}>
          <p className="comment">{shortcomment}</p>
          <div className="rating">
            <hr />
            <p>{rating ? `Rating : ${rating} / 5` : 'Please Eval 🙈'}</p>
          </div>
        </Wrap>
      </Link>
    </BookContainer>
  );
}

export default MyBookImg;
