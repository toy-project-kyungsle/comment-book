import GetDate from '@utils/GetDate';
import GetDetailedName from '@utils/GetCategoryName';
import React from 'react';
import { OnelineTextArea, RatingTextArea } from './styles';
import { IbookData } from '@utils/types';
import Paragraph from '@components/atoms/Paragraph';
import SpanBox from '@components/molecules/SpanBox';
import Span from '@components/atoms/Span';

interface Props {
  book: IbookData;
  infoMode: boolean;
  editMode: boolean;
  rating: number;
  onChangeRating: (e: any) => void;
  onChangeShortComment: (e: any) => void;
  shortComment: string;
}

function DetailLetters(props: Props) {
  const { book, infoMode, editMode, rating, onChangeRating, onChangeShortComment, shortComment } = props;
  const infoArr = [
    [book.author, '작가&emsp;', book.author],
    [book.categoryId, '장르&emsp;', GetDetailedName(book.categoryId)],
    [book.pubDate, '출판일', GetDate(book.pubDate)],
  ];
  return (
    <div>
      <Paragraph className="DetailTitle">{book.title}</Paragraph>
      {infoArr.map((elem) => elem[0] && <SpanBox className="DetailPage" firstChild={elem[1]} secondChild={elem[2]} />)}
      {!infoMode && (
        <SpanBox
          className="DetailPage"
          firstChild="평점&emsp;"
          secondChild={
            editMode ? (
              <>
                <RatingTextArea onChange={onChangeRating} value={rating} />
                <Span className="DetailPageRtnComment">5점이 만점입니다.</Span>
              </>
            ) : (
              <Span className="DetailPage">{rating}</Span>
            )
          }
        />
      )}
      {!infoMode && (
        <SpanBox
          className="DetailPage"
          firstChild="한줄평"
          secondChild={
            editMode ? (
              <OnelineTextArea
                onChange={onChangeShortComment}
                value={shortComment === "There's no comment" ? '' : shortComment}
                maxLength={34}
              />
            ) : (
              <Span className="DetailPage">{shortComment}</Span>
            )
          }
        />
      )}
    </div>
  );
}

export default DetailLetters;
