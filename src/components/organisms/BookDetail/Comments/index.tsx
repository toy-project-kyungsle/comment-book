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

function Comment(props: Props) {
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

  const [EditModeTextArr, EditModeOnclickArr] = [
    ['Finish', 'Cancle'],
    [onSubmit, onClickCancle],
  ];
  const [InfoModeTextArr, InfoModeOnclickArr] = [['Comment'], [onClickInfoBtn]];
  const [defModeTextArr, defModeOnclickArr] = [
    ['Info', 'Edit', 'Delete'],
    [onClickInfoBtn, onClickAddEditBtn, onClickDelete],
  ];

  return editMode ? (
    <div style={{ minHeight: '180px' }}>
      {LonglineTextArea(longComment, onCangeLongComment)}
      <SpanBox className="DetailComment" textArr={EditModeTextArr} onClickArr={EditModeOnclickArr} />
    </div>
  ) : infoMode ? (
    <>
      <Description>
        <Paragraph className="default">{(book as IbookData).description}</Paragraph>
      </Description>
      <SpanBox className="DetailComment" textArr={InfoModeTextArr} onClickArr={InfoModeOnclickArr} />
    </>
  ) : (
    <>
      <Paragraph className="DetailCommentLong">{longComment}</Paragraph>
      <SpanBox className="DetailComment" textArr={defModeTextArr} onClickArr={defModeOnclickArr} />
    </>
  );
}

export default Comment;
