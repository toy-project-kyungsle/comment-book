import React, { useCallback } from 'react';
import { BtnDiv, Description, LonglineTextArea } from './styles';
import { dbService, authService } from '@utils/fbase';
import { deleteField, doc, setDoc, updateDoc } from 'firebase/firestore';
import { BookData } from '@utils/types';

interface Props {
  shortComment: string;
  longComment: string;
  onCangeLongComment: (e: any) => void;
  book: BookData;
  rating: number;
  bookIsbn: number;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  infoMode: boolean;
  setInfoMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function DetailComment({
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
}: Props) {
  const onClickInfoBtn = useCallback(() => {
    setInfoMode((prev) => !prev);
  }, [setInfoMode]);

  const onClickAddEditBtn = useCallback(() => {
    setEditMode((prev) => !prev);
  }, [setEditMode]);

  const onClickCancle = useCallback(() => {
    setEditMode(false);
  }, [setEditMode]);

  const onSubmit = useCallback(
    async (event: any) => {
      event.preventDefault();
      try {
        await setDoc(
          doc(dbService, `UserEval`, authService.currentUser.uid),
          {
            [bookIsbn]: Object.assign({}, book, {
              rating,
              shortComment,
              longComment,
              editDate: new Date(),
            }),
          },
          { merge: true },
        );
      } catch (error) {
        console.log(error);
      }
      setEditMode(false);
      setInfoMode(false);
    },
    [book, bookIsbn, longComment, rating, setEditMode, setInfoMode, shortComment],
  );

  const onClickDelete = useCallback(async () => {
    const ok = window.confirm('정말로 이 후기를 지우시겠습니까?');
    if (ok) {
      const commentRef = doc(dbService, 'UserEval', authService.currentUser.uid);
      await updateDoc(commentRef, {
        [bookIsbn]: deleteField(),
      })
        .then(() => window.alert('삭제 완료'))
        .catch((err) => console.log(err));
    }
  }, [bookIsbn]);

  return editMode ? (
    <div style={{ minHeight: '180px' }}>
      {LonglineTextArea(longComment, onCangeLongComment)}
      <BtnDiv>
        <span onClick={onSubmit}>Finish</span>
        <span onClick={onClickCancle}>Cancle</span>
      </BtnDiv>
    </div>
  ) : infoMode ? (
    <>
      <Description>
        <p>{(book as BookData).description}</p>
      </Description>
      <BtnDiv>
        <span onClick={onClickInfoBtn}>Comment</span>
      </BtnDiv>
    </>
  ) : (
    <>
      <p className="longComment">{longComment}</p>
      <BtnDiv>
        <span onClick={onClickInfoBtn}>Info</span>
        <span onClick={onClickAddEditBtn}>Comment</span>
        <span onClick={onClickDelete}>Delete</span>
      </BtnDiv>
    </>
  );
}

export default DetailComment;
