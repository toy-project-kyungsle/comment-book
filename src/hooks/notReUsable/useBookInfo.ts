import { authService, dbService } from '@utils/funtions/fbaseApp';
import store from '@redux/store';
import { useCallback, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { IFbookData } from '@utils/objects/types';
import GetSelectedMybook from '@utils/funtions/GetSelectedMybook';

type rtn = [IFbookData[], (a: string, b: string, c: string) => void];

const useBookInfo = (setLoadNum: (e: any) => void): rtn => {
  const isLoggedIn = store.getState()['isLoggedIn'];
  const [mybooks, setMybooks] = useState<IFbookData[]>([]);

  const getBookInfo = useCallback(
    async (categorySelected: string, ratingSelected: string, yearSelected: string) => {
      if (isLoggedIn) {
        let dbBooks: any = null;
        if (authService.currentUser)
          dbBooks = (await getDoc(doc(dbService, 'UserEval', authService.currentUser.uid))).data();
        const dbBooksArr: IFbookData[] | [] = dbBooks ? Object.values(dbBooks) : [];

        setMybooks(GetSelectedMybook({ dbBooksArr, categorySelected, ratingSelected, yearSelected }));
      }
    },
    [isLoggedIn],
  );

  useEffect(() => {
    if (isLoggedIn) {
      getBookInfo('', '', '');
    } else {
      setLoadNum((prev: number) => prev + 1);
    }
  }, [getBookInfo, isLoggedIn, setLoadNum]);

  return [mybooks, getBookInfo];
};

export default useBookInfo;
