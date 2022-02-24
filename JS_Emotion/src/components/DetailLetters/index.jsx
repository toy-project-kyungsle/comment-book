import GetDate from '@utils/GetDate';
import GetDetailedName from '@utils/GetDetailedName';
import React from 'react';
import { Container, OnelineTextArea, RatingTextArea } from './styles';

function DetailLetters({ book, infoMode, editMode, rating, onChangeRating, onChangeShortComment, shortComment }) {
  return (
    <Container>
      <p className="title">{book.title} </p>
      {book.author ? (
        <div className="infoDiv">
          <span className="tagName">작가&emsp;</span>
          <span>{book.author}</span>
        </div>
      ) : null}
      {book.categoryId ? (
        <div className="infoDiv">
          <span className="tagName">장르&emsp;</span>
          <span>{GetDetailedName(book.categoryId)}</span>
        </div>
      ) : null}
      {book.pubDate ? (
        <div className="infoDiv">
          <span className="tagName">출판일</span>
          <span>{GetDate(book.pubDate)}</span>
        </div>
      ) : null}
      {!infoMode ? (
        <div className="infoDiv">
          <span className="tagName">평점&emsp;</span>
          {editMode ? (
            <>
              <RatingTextArea onChange={onChangeRating} value={rating} />
              <span className="rtcomment">5점이 만점입니다.</span>
            </>
          ) : (
            <span>{rating}</span>
          )}
        </div>
      ) : null}
      {!infoMode ? (
        <div className="infoDiv">
          <span className="tagName">한줄평</span>
          {editMode ? (
            <OnelineTextArea
              onChange={onChangeShortComment}
              value={shortComment === "There's no comment" ? '' : shortComment}
              maxLength={34}
            />
          ) : (
            <span>{shortComment}</span>
          )}
        </div>
      ) : null}
    </Container>
  );
}

export default DetailLetters;
