import { authService, dbService } from '@utils/funtions/fbaseApp';
import { IbookData } from '@utils/objects/types';
import { deleteField, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useCallback } from 'react';

interface Props {
  setInfoMode: React.Dispatch<React.SetStateAction<boolean>>;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  bookIsbn: number;
  rating: number;
  book: IbookData;
  shortComment: string;
  longComment: string;
}

type rtn = [() => void, () => void, () => void, (event: any) => Promise<void>, () => Promise<void>];

const useDetailComment = (props: Props): rtn => {
  const { setInfoMode, setEditMode, bookIsbn, rating, book, shortComment, longComment } = props;

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

  return [onClickInfoBtn, onClickAddEditBtn, onClickCancle, onSubmit, onClickDelete];
};

export default useDetailComment;
