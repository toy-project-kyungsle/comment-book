import useInput from '@hooks/useinput';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookContainer, BookImg, Wrap } from './styles';

function MyBookImg({ coverImg, title, isbn }) {
  const [wrapDisplay, setWrapDisplay] = useInput('none');

  const onMouseOverImg = useCallback(() => {
    setWrapDisplay('display');
  }, [setWrapDisplay]);

  const onMouseOutImg = useCallback(() => {
    setWrapDisplay('none');
  }, [setWrapDisplay]);

  return (
    <BookContainer>
      <Link to={`/detailpage/${isbn}`}>
        <BookImg src={coverImg} alt={title} onMouseOver={onMouseOverImg} onMouseOut={onMouseOutImg} />
        <Wrap wrapDisplay={wrapDisplay} />
      </Link>
    </BookContainer>
  );
}

export default MyBookImg;
