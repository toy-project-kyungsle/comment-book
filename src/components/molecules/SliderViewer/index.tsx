import React from 'react';
import LinkImage from '@components/molecules/LinkImage';
import { Slides, Wrapper } from './styles';
import { IFbookData } from '@utils/objects/types';

interface Props {
  trans: number;
  mybooks: IFbookData[];
}

function SliderViewer(props: Props) {
  const { trans, mybooks } = props;
  return (
    <Wrapper>
      <Slides data-trans={trans} data-bookCount={mybooks.length}>
        {mybooks?.map((book) => {
          return (
            <LinkImage
              key={book.isbn}
              title={book.title}
              coverImg={book.coverLargeUrl}
              isbn={book.isbn}
              shortcomment={book.shortComment}
              rating={book.rating}
            />
          );
        })}
      </Slides>
    </Wrapper>
  );
}

export default SliderViewer;
