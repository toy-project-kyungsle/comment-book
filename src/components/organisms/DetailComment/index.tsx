import React from 'react';
import { Description, LonglineTextArea } from './styles';
import { IbookData } from '@utils/objects/types';
import useDetailComment from '@hooks/notReUsable/useDetailComment';
import SpanBox from '@components/molecules/SpanBox';
import Paragraph from '@components/atoms/Paragraph';

interface Props {
  shortComment: string;
  longComment: string;
  onCangeLongComment: (e: any) => void;
  book: IbookData;
  rating: number;
  bookIsbn: number;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  infoMode: boolean;
  setInfoMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function DetailComment(props: Props) {
  const {
    shortComment,
    longComment,
    onCangeLongComment,
    book,
    rating,
    bookIsbn,
    editMode,
    setEditMode,
    infoMode,
    setInfoMode,
  } = props;

  const [onClickInfoBtn, onClickAddEditBtn, onClickCancle, onSubmit, onClickDelete] = useDetailComment({
    setInfoMode,
    setEditMode,
    bookIsbn,
    rating,
    book,
    shortComment,
    longComment,
  });

  return editMode ? (
    <div style={{ minHeight: '180px' }}>
      {LonglineTextArea(longComment, onCangeLongComment)}
      <SpanBox
        className="DetailComment"
        firstChild="Finish"
        secondChild="Cancle"
        secondVisible={true}
        fisrtOnClick={onSubmit}
        secondOnClick={onClickCancle}
      />
    </div>
  ) : infoMode ? (
    <>
      <Description>
        <Paragraph className="default">{(book as IbookData).description}</Paragraph>
      </Description>
      <SpanBox className="DetailComment" firstChild="Comment" fisrtOnClick={onClickInfoBtn} />
    </>
  ) : (
    <>
      <Paragraph className="DetailCommentLong">{longComment}</Paragraph>
      <SpanBox
        className="DetailComment"
        firstChild="Info"
        secondChild="Edit"
        thirdChild="Delete"
        secondVisible={true}
        thirdVisible={true}
        fisrtOnClick={onClickInfoBtn}
        secondOnClick={onClickAddEditBtn}
        thirdOnClick={onClickDelete}
      />
    </>
  );
}

export default DetailComment;
