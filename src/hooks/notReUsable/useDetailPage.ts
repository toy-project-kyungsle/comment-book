import { useCallback, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { authService, dbService } from '@utils/funtions/fbaseApp';
import store from '@redux/store';
import axios from 'axios';
import { IbookData } from '@utils/objects/types';

interface Props {
  isbn: string;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setShortComment: React.Dispatch<React.SetStateAction<string>>;
  setLongComment: React.Dispatch<React.SetStateAction<string>>;
  setInfoMode: React.Dispatch<React.SetStateAction<boolean>>;
}

type rtn = [IbookData | {}, boolean, number];

const useDetailPage = (props: Props): rtn => {
  const { isbn, setRating, setShortComment, setLongComment, setInfoMode } = props;
  const [book, setBook] = useState<IbookData | {}>({});

  const [bookIsbn, setBookIsbn] = useState(0);
  const [loading, setLoading] = useState(false);

  const isLoggedIn = store.getState()['isLoggedIn'];

  const getBookInfo = useCallback(async () => {
    if (isLoggedIn) {
      const dbBooks = (await getDoc(doc(dbService, `UserEval`, authService.currentUser.uid))).data();
      if (!dbBooks || !dbBooks[bookIsbn]) {
        setInfoMode(true);
      } else if (dbBooks) {
        setInfoMode(false);
        setRating(dbBooks[bookIsbn].rating);
        setShortComment(dbBooks[bookIsbn].shortComment);
        setLongComment(dbBooks[bookIsbn].longComment);
      }
    } else {
      setInfoMode(true);
      setRating(0);
      setShortComment("There's no comment");
      setLongComment('You have no commnet for this book');
    }
    setLoading(false);
  }, [bookIsbn, isLoggedIn, setInfoMode, setLongComment, setRating, setShortComment]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.SERVER_ADR}/isbnsearch/${isbn}`).then((res) => {
      if (res.data.items[0]) {
        setBook(res.data.items[0]);
        setBookIsbn(res.data.items[0].isbn);
      }
    });
  }, [isbn, setBook, setLoading]);

  useEffect(() => {
    if (Object.keys(book).length) getBookInfo();
  }, [book, getBookInfo, isLoggedIn]);

  return [book, loading, bookIsbn];
};

export default useDetailPage;
