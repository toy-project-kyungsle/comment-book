import GetDate from '@utils/funtions/GetDate';
import GetDetailedName from '@utils/funtions/GetCategoryName';
import React from 'react';
import { IbookData } from '@utils/objects/types';
import Paragraph from '@components/atoms/Paragraph';
import SpanBox from '@components/molecules/SpanBox';
import Span from '@components/atoms/Span';
import TextArea from '@components/atoms/TextArea';

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
  const infoArr = [book.author, book.categoryId, book.pubDate];
  const InfoChildArr = [
    [`작가\xa0\xa0\xa0\xa0`, book.author],
    ['장르\xa0\xa0\xa0\xa0', GetDetailedName(book.categoryId)],
    ['출판일', GetDate(book.pubDate)],
  ];
  const ClassArr = ['DetailPageFirst', 'DetailPageSecond'];

  const ratingModeTextArr = [
    '평점\xa0\xa0\xa0\xa0',
    editMode ? (
      <>
        <TextArea className="DetailPageRating" onChange={onChangeRating} value={rating} />
        <Span className="DetailPageRtnComment">5점이 만점입니다.</Span>
      </>
    ) : (
      <Span className="DetailPage">{rating}</Span>
    ),
  ];

  const oneLineTextArr = [
    '한줄평',
    editMode ? (
      <TextArea
        className="DetailPageOneline"
        onChange={onChangeShortComment}
        value={shortComment === "There's no comment" ? '' : shortComment}
        maxLength={34}
      />
    ) : (
      <Span className="DetailPage">{shortComment}</Span>
    ),
  ];

  return (
    <div>
      <Paragraph className="DetailTitle">{book.title}</Paragraph>
      {infoArr.map(
        (elem, i) => elem && <SpanBox className="DetailPage" classNameArr={ClassArr} textArr={InfoChildArr[i]} />,
      )}
      {!infoMode && <SpanBox className="DetailPage" classNameArr={ClassArr} textArr={ratingModeTextArr} />}
      {!infoMode && <SpanBox className="DetailPage" classNameArr={ClassArr} textArr={oneLineTextArr} />}
    </div>
  );
}

export default DetailLetters;
