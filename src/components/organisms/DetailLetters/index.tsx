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
  const infoArr = [
    [book.author, `작가\xa0\xa0\xa0`, book.author],
    [book.categoryId, '장르\xa0\xa0\xa0', GetDetailedName(book.categoryId)],
    [book.pubDate, '출판일', GetDate(book.pubDate)],
  ];
  return (
    <div>
      <Paragraph className="DetailTitle">{book.title}</Paragraph>
      {infoArr.map(
        (elem) =>
          elem[0] && <SpanBox className="DetailPage" firstChild={elem[1]} secondChild={elem[2]} secondVisible={true} />,
      )}
      {!infoMode && (
        <SpanBox
          className="DetailPage"
          firstChild="평점&emsp;"
          secondChild={
            editMode ? (
              <>
                <TextArea className="DetailPageRating" onChange={onChangeRating} value={rating} />
                <Span className="DetailPageRtnComment">5점이 만점입니다.</Span>
              </>
            ) : (
              <Span className="DetailPage">{rating}</Span>
            )
          }
          secondVisible={true}
        />
      )}
      {!infoMode && (
        <SpanBox
          className="DetailPage"
          firstChild="한줄평"
          secondChild={
            editMode ? (
              <TextArea
                className="DetailPageOneline"
                onChange={onChangeShortComment}
                value={shortComment === "There's no comment" ? '' : shortComment}
                maxLength={34}
              />
            ) : (
              <Span className="DetailPage">{shortComment}</Span>
            )
          }
          secondVisible={true}
        />
      )}
    </div>
  );
}

export default DetailLetters;
